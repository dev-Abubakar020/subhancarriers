// ──────────────────────────────────────────────────────────────────────────────
// Subhan Carriers — Vercel Serverless Function (/api/send-email)
// ──────────────────────────────────────────────────────────────────────────────
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.RESEND_FROM || 'noreply@subhancarriers.com';
const TO = process.env.RESEND_TO || 'subhancarriers@gmail.com';

function emailShell(title, bodyHtml) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <style>
    body { margin:0; padding:0; font-family: 'Segoe UI', Arial, sans-serif; background:#F1F5F9; }
    .wrap { max-width:620px; margin:32px auto; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 4px 24px rgba(0,0,0,.08); }
    .header { background:linear-gradient(135deg,#0B1F3A 0%,#1E3A5F 100%); padding:32px 32px 24px; color:#fff; }
    .logo { font-size:22px; font-weight:800; letter-spacing:1px; color:#fff; }
    .logo span { color:#FF8A00; }
    .tagline { font-size:12px; color:#94A3B8; margin-top:4px; }
    .badge { display:inline-block; margin-top:16px; background:rgba(255,138,0,.15); border:1px solid rgba(255,138,0,.4); color:#FF8A00; font-size:11px; font-weight:700; letter-spacing:1px; padding:4px 12px; border-radius:999px; text-transform:uppercase; }
    .body { padding:32px; }
    .field { margin-bottom:16px; }
    .label { font-size:11px; font-weight:700; color:#94A3B8; text-transform:uppercase; letter-spacing:.5px; margin-bottom:4px; }
    .value { font-size:14px; color:#1E293B; font-weight:500; background:#F8FAFC; padding:10px 14px; border-radius:8px; border-left:3px solid #0B1F3A; }
    .value.highlight { border-left-color:#FF8A00; }
    .row2 { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
    .divider { border:none; border-top:1px solid #E2E8F0; margin:24px 0; }
    .cta { display:block; text-align:center; background:#FF8A00; color:#fff; text-decoration:none; font-weight:700; font-size:14px; padding:14px 28px; border-radius:10px; margin:8px 0; }
    .cta.secondary { background:#0B1F3A; }
    .footer { background:#F8FAFC; padding:20px 32px; text-align:center; font-size:11px; color:#94A3B8; border-top:1px solid #E2E8F0; }
    .footer a { color:#0B1F3A; text-decoration:none; font-weight:600; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <div class="logo">SUBHAN <span>CARRIERS</span></div>
      <div class="tagline">Pakistan's Best Transportation Services | Jaranwala, Faisalabad</div>
      <div class="badge">📩 New Enquiry Received</div>
    </div>
    <div class="body">
      ${bodyHtml}
      <hr class="divider" />
      <a class="cta" href="https://wa.me/923006539785">💬 Reply on WhatsApp (+92 300-6539785)</a>
      <a class="cta secondary" href="tel:+923006539785">📞 Call Client Now</a>
    </div>
    <div class="footer">
      Subhan Carriers Goods Transport Company &bull; Near Ibrahim Marriage Hall, Canal Road, Jaranwala, Faisalabad<br/>
      <a href="mailto:subhancarriers@gmail.com">subhancarriers@gmail.com</a> &bull; <a href="tel:+923006539785">+92 300-6539785</a>
    </div>
  </div>
</body>
</html>`;
}

function autoReplyShell(clientName, bodyHtml) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Thank You — Subhan Carriers</title>
  <style>
    body { margin:0; padding:0; font-family:'Segoe UI',Arial,sans-serif; background:#F1F5F9; }
    .wrap { max-width:620px; margin:32px auto; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 4px 24px rgba(0,0,0,.08); }
    .header { background:linear-gradient(135deg,#0B1F3A,#1E3A5F); padding:32px; color:#fff; text-align:center; }
    .logo { font-size:22px; font-weight:800; letter-spacing:1px; }
    .logo span { color:#FF8A00; }
    .hero-text { font-size:28px; font-weight:800; margin-top:20px; line-height:1.2; }
    .hero-sub { font-size:14px; color:#94A3B8; margin-top:8px; }
    .body { padding:32px; }
    p { font-size:14px; color:#334155; line-height:1.7; }
    .highlight-box { background:#FFF7ED; border:1px solid #FED7AA; border-radius:12px; padding:20px; margin:20px 0; }
    .highlight-box .ref { font-size:22px; font-weight:800; color:#FF8A00; font-family:monospace; }
    .steps { margin:20px 0; }
    .step { display:flex; align-items:flex-start; gap:12px; margin-bottom:16px; }
    .step-num { width:28px; height:28px; border-radius:50%; background:#0B1F3A; color:#fff; font-weight:800; font-size:13px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:2px; }
    .step-text { font-size:13px; color:#334155; }
    .step-text strong { color:#0B1F3A; display:block; margin-bottom:2px; }
    .cta { display:block; text-align:center; background:#FF8A00; color:#fff; text-decoration:none; font-weight:700; font-size:14px; padding:14px 28px; border-radius:10px; margin:8px 0; }
    .cta.secondary { background:#0B1F3A; }
    .footer { background:#F8FAFC; padding:20px 32px; text-align:center; font-size:11px; color:#94A3B8; border-top:1px solid #E2E8F0; }
    .footer a { color:#0B1F3A; text-decoration:none; font-weight:600; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <div class="logo">SUBHAN <span>CARRIERS</span></div>
      <div class="hero-text">شکریہ، ${clientName}!</div>
      <div class="hero-sub">Your enquiry has been received — we'll contact you shortly.</div>
    </div>
    <div class="body">
      ${bodyHtml}
      <a class="cta" href="https://wa.me/923006539785">💬 Chat with Us on WhatsApp</a>
      <a class="cta secondary" href="tel:+923006539785">📞 Call: (+92) 300-6539785</a>
    </div>
    <div class="footer">
      Subhan Carriers Goods Transport Company &bull; Jaranwala, Faisalabad, Pakistan<br/>
      <a href="mailto:subhancarriers@gmail.com">subhancarriers@gmail.com</a> &bull; <a href="tel:+923006539785">+92 300-6539785</a>
    </div>
  </div>
</body>
</html>`;
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { type, ...data } = req.body || {};

  try {
    if (type === 'contact') {
      const { name, email, phone, department, subject, message } = data;

      const adminBody = `
        <h2 style="color:#0B1F3A;font-size:18px;margin:0 0 20px;">New Contact Form Submission</h2>
        <div class="row2">
          <div class="field"><div class="label">Full Name</div><div class="value highlight">${name}</div></div>
          <div class="field"><div class="label">Service Required</div><div class="value">${department}</div></div>
        </div>
        <div class="row2">
          <div class="field"><div class="label">Phone / WhatsApp</div><div class="value highlight">📞 ${phone}</div></div>
          <div class="field"><div class="label">Email Address</div><div class="value">✉️ ${email || '—'}</div></div>
        </div>
        <div class="field"><div class="label">Subject</div><div class="value">${subject}</div></div>
        <div class="field"><div class="label">Message</div><div class="value">${(message || '').replace(/\n/g, '<br/>')}</div></div>
      `;

      const clientBody = `
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for reaching out to <strong>Subhan Carriers</strong>! We have received your message and our team will respond to you within <strong>2–4 hours</strong> via phone or WhatsApp.</p>
        <div class="highlight-box">
          <div style="font-size:12px;color:#94A3B8;margin-bottom:4px;">YOUR ENQUIRY REFERENCE</div>
          <div class="ref">SC-MSG-${Date.now().toString().slice(-6)}</div>
          <div style="font-size:12px;color:#64748B;margin-top:8px;">Subject: ${subject}</div>
        </div>
        <div class="steps">
          <div class="step"><div class="step-num">1</div><div class="step-text"><strong>Confirmation Received</strong>We've logged your enquiry — our coordinator has been notified.</div></div>
          <div class="step"><div class="step-num">2</div><div class="step-text"><strong>Quick Response</strong>Expect a call or WhatsApp message from <strong>Ali Akbar</strong> (Freight Coordinator) within 2–4 hours.</div></div>
          <div class="step"><div class="step-num">3</div><div class="step-text"><strong>Booking Confirmed</strong>Once confirmed, we dispatch the right vehicle to your doorstep on your chosen date.</div></div>
        </div>
      `;

      await Promise.all([
        resend.emails.send({
          from: FROM,
          to: TO,
          subject: `📩 New Contact: ${subject} — ${name}`,
          html: emailShell(`Contact: ${subject}`, adminBody),
        }),
        email
          ? resend.emails.send({
              from: FROM,
              to: email,
              replyTo: TO,
              subject: `✅ We received your message — Subhan Carriers`,
              html: autoReplyShell(name, clientBody),
            })
          : Promise.resolve(),
      ]);

      return res.status(200).json({ success: true });
    } else if (type === 'quote') {
      const {
        service,
        origin,
        destination,
        vehicleNeeded,
        weightKg,
        packingNeeded,
        pickupDate,
        fullName,
        company,
        email,
        phone,
        notes,
        estimatedMin,
        estimatedMax,
        quoteReference,
      } = data;

      const serviceLabels = {
        'road-freight': 'Goods Transport & Road Freight',
        warehousing: 'Household Shifting & Packing',
        'express-delivery': 'Express Same-Day Delivery',
        'heavy-haulage': 'Commercial & Heavy Cargo',
      };

      const adminBody = `
        <h2 style="color:#0B1F3A;font-size:18px;margin:0 0 20px;">📋 New Quote Request — ${quoteReference}</h2>
        <div class="row2">
          <div class="field"><div class="label">Client Name</div><div class="value highlight">${fullName}</div></div>
          <div class="field"><div class="label">Company (if any)</div><div class="value">${company || '—'}</div></div>
        </div>
        <div class="row2">
          <div class="field"><div class="label">Phone / WhatsApp</div><div class="value highlight">📞 ${phone}</div></div>
          <div class="field"><div class="label">Email</div><div class="value">✉️ ${email || '—'}</div></div>
        </div>
        <hr class="divider" />
        <div class="row2">
          <div class="field"><div class="label">Service Type</div><div class="value">${serviceLabels[service] || service}</div></div>
          <div class="field"><div class="label">Vehicle Required</div><div class="value">${vehicleNeeded}</div></div>
        </div>
        <div class="row2">
          <div class="field"><div class="label">Origin City</div><div class="value highlight">📍 ${origin}</div></div>
          <div class="field"><div class="label">Destination City</div><div class="value highlight">📍 ${destination || 'Storage / Local'}</div></div>
        </div>
        <div class="row2">
          <div class="field"><div class="label">Approx. Weight</div><div class="value">${weightKg} kg</div></div>
          <div class="field"><div class="label">Moving Date</div><div class="value">📅 ${pickupDate}</div></div>
        </div>
        <div class="row2">
          <div class="field"><div class="label">Packing Service</div><div class="value">${packingNeeded === 'Yes' ? '✅ Full Packing Plan' : '❌ Transport Only'}</div></div>
          <div class="field"><div class="label">Estimated Rate</div><div class="value highlight">Rs. ${Number(estimatedMin || 0).toLocaleString()} – ${Number(estimatedMax || 0).toLocaleString()}</div></div>
        </div>
        ${notes ? `<div class="field"><div class="label">Special Instructions</div><div class="value">${notes.replace(/\n/g, '<br/>')}</div></div>` : ''}
      `;

      const clientBody = `
        <p>Dear <strong>${fullName}</strong>,</p>
        <p>Thank you for requesting a quote from <strong>Subhan Carriers</strong>! Your moving & freight enquiry is now with our dispatch team. We'll confirm vehicle availability and exact pricing within a few hours.</p>
        <div class="highlight-box">
          <div style="font-size:12px;color:#94A3B8;margin-bottom:4px;">QUOTE REFERENCE NUMBER</div>
          <div class="ref">${quoteReference}</div>
          <div style="font-size:12px;color:#64748B;margin-top:8px;">
            Route: <strong>${origin}${destination ? ' → ' + destination : ''}</strong><br/>
            Estimated Rate: <strong style="color:#FF8A00;">Rs. ${Number(estimatedMin || 0).toLocaleString()} – ${Number(estimatedMax || 0).toLocaleString()}</strong>
          </div>
        </div>
        <div class="steps">
          <div class="step"><div class="step-num">1</div><div class="step-text"><strong>Quote Received ✅</strong>Your request (${quoteReference}) has been logged with our central dispatch desk.</div></div>
          <div class="step"><div class="step-num">2</div><div class="step-text"><strong>Vehicle Confirmation</strong><strong>Ali Akbar</strong> (Freight Coordinator) will call you at <strong>${phone}</strong> to confirm the exact rate and truck availability.</div></div>
          <div class="step"><div class="step-num">3</div><div class="step-text"><strong>Moving Day</strong>Our trained crew will arrive on <strong>${pickupDate}</strong> at your pickup location in <strong>${origin}</strong>.</div></div>
        </div>
        <p style="font-size:13px;color:#64748B;">You can also forward this email or share your quote reference when calling us for quick identification.</p>
      `;

      await Promise.all([
        resend.emails.send({
          from: FROM,
          to: TO,
          subject: `📋 Quote Request ${quoteReference}: ${origin} → ${destination || 'Local'} — ${fullName}`,
          html: emailShell(`Quote: ${quoteReference}`, adminBody),
        }),
        email
          ? resend.emails.send({
              from: FROM,
              to: email,
              replyTo: TO,
              subject: `📋 Your Quote ${quoteReference} — Subhan Carriers`,
              html: autoReplyShell(fullName, clientBody),
            })
          : Promise.resolve(),
      ]);

      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ success: false, error: 'Unknown form type' });
    }
  } catch (err) {
    console.error('[Resend Error]', err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
