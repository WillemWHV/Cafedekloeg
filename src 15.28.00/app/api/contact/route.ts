import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function validate(data: Partial<ContactFormData>): string | null {
  if (!data.name || data.name.trim().length < 2)
    return "Naam is verplicht (minimaal 2 tekens).";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return "Vul een geldig e-mailadres in.";
  if (!data.message || data.message.trim().length < 10)
    return "Bericht is verplicht (minimaal 10 tekens).";
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<ContactFormData>;
    const error = validate(body);
    if (error) {
      return NextResponse.json({ success: false, message: error }, { status: 400 });
    }
    // Log to server — swap for nodemailer in production
    console.log("📬 Contactbericht:", {
      name: body.name,
      email: body.email,
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json({
      success: true,
      message: "Bedankt! We nemen zo snel mogelijk contact met je op.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Er ging iets mis. Probeer het opnieuw." },
      { status: 500 }
    );
  }
}
