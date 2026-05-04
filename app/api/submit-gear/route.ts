import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, location, gearTypes, notes } = await req.json();

  if (!name || !email || !location || !gearTypes?.length) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "RecycleLacrosse <noreply@recyclelacrosse.com>",
    to:   "elliott.t.elijah@gmail.com",
    replyTo: email,
    subject: `New Gear Submission — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#111827">
        <div style="background:#2d6a4f;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="color:#fff;margin:0;font-size:1.3rem">🥍 New Gear Submission</h1>
        </div>
        <div style="border:1px solid #e5e7eb;border-top:none;padding:32px;border-radius:0 0 12px 12px">
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#6b7280;font-size:0.875rem;width:120px">Name</td>
              <td style="padding:8px 0;font-weight:600">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b7280;font-size:0.875rem">Email</td>
              <td style="padding:8px 0"><a href="mailto:${email}" style="color:#2d6a4f">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b7280;font-size:0.875rem">Location</td>
              <td style="padding:8px 0">${location}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b7280;font-size:0.875rem;vertical-align:top">Gear</td>
              <td style="padding:8px 0">
                ${gearTypes.map((g: string) => `<span style="display:inline-block;background:#d8f3dc;color:#1b4332;font-size:0.8rem;font-weight:600;padding:2px 10px;border-radius:999px;margin:2px 4px 2px 0">${g}</span>`).join("")}
              </td>
            </tr>
            ${notes ? `
            <tr>
              <td style="padding:8px 0;color:#6b7280;font-size:0.875rem;vertical-align:top">Notes</td>
              <td style="padding:8px 0;line-height:1.6">${notes}</td>
            </tr>` : ""}
          </table>
          <p style="margin:24px 0 0;font-size:0.875rem;color:#9ca3af">
            Hit reply to respond directly to ${name}.
          </p>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
