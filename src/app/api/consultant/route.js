import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { fullName, phone, monthlyIncome, propertyBudget } =
      await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "contact@easyhomemortgage.ae",
        pass: "Home@easy@2026",
      },
    });

    await transporter.sendMail({
      from: `"Website Get Free Consultation" <contact@easyhomemortgage.ae>`,
      to: "contact@easyhomemortgage.ae",
      replyTo: "no-reply@easyhomemortgage.ae",
      subject: "New Get Free Consultation",
      html: `

    <table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,.08);">

      <!-- Header -->
      <tr>
        <td style="background:#0d6efd;padding:30px;text-align:center;">
          <h1 style="margin:0;color:#ffffff;font-size:28px;">
           Get Free Consultation
          </h1>
          <p style="margin:8px 0 0;color:#dbe7ff;">
            A new message has been received from your website.
          </p>
        </td>
      </tr>

      <!-- Content -->
      <tr>
        <td style="padding:35px;">

          <table width="100%" cellpadding="0" cellspacing="0">

            <tr>
              <td style="padding:12px 15px;background:#f8f9fa;border-radius:8px;">
                <strong>Name:</strong><br>
                ${fullName}
              </td>
            </tr>

            <tr><td height="10"></td></tr>

            <tr>
              <td style="padding:12px 15px;background:#f8f9fa;border-radius:8px;">
                <strong>Monthly Income:</strong><br>
                ${monthlyIncome}
              </td>
            </tr>

            <tr><td height="10"></td></tr>

            <tr>
              <td style="padding:12px 15px;background:#f8f9fa;border-radius:8px;">
                <strong>Phone Number:</strong><br>
                ${phone || "Not Provided"}
              </td>
            </tr>

            <tr><td height="10"></td></tr>

            <tr>
              <td style="padding:15px;background:#f8f9fa;border-radius:8px;">
                <strong>Property Budget:</strong>
                <p style="margin:10px 0 0;line-height:1.7;color:#555;">
                  ${propertyBudget}
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f8f9fa;padding:20px;text-align:center;border-top:1px solid #e9ecef;">
          <p style="margin:0;color:#666;font-size:13px;">
            This email was automatically generated from your website contact form.
          </p>

          <p style="margin:8px 0 0;color:#999;font-size:12px;">
            © ${new Date().getFullYear()} Your Company Name. All Rights Reserved.
          </p>
        </td>
      </tr>

    </table>

  </td>
</tr>
      `,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 },
    );
  }
}
