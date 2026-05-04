import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "RecycleLacrosse <noreply@recyclelacrosse.com>",
    to:   "elliott.t.elijah@gmail.com",
    replyTo: email,
    subject: "New Waitlist Signup — Workout Handles",
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#111827">
        <div style="background:#2d6a4f;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="color:#fff;margin:0;font-size:1.3rem">💪 New Waitlist Signup</h1>
        </div>
        <div style="border:1px solid #e5e7eb;border-top:none;padding:32px;border-radius:0 0 12px 12px">
          <p style="margin:0 0 8px;color:#6b7280;font-size:0.875rem">Email</p>
          <p style="margin:0;font-weight:600">
            <a href="mailto:${email}" style="color:#2d6a4f">${email}</a>
          </p>
          <p style="margin:24px 0 0;font-size:0.875rem;color:#9ca3af">
            Hit reply to follow up with them directly.
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
