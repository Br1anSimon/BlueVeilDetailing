# EmailJS Setup Instructions

To complete the EmailJS integration for BlueVeil Detailing's contact form, follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission - BlueVeil Detailing

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Package: {{service_package}}

Message:
{{message}}

---
This message was sent from the BlueVeil Detailing website contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (User ID)

## 5. Update the Code
Replace these values in `src/components/Contact.tsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID';        // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';      // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY';        // Replace with your Public Key
```

Also update the business email:
```javascript
to_email: 'your-business-email@example.com', // Replace with your actual business email
```

## 6. Test the Form
1. Save the changes
2. Fill out the contact form on your website
3. Check your email for the message
4. Verify the form shows success/error messages

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Upgrade to paid plan for more emails and to remove branding

## Security Note
The public key is safe to use in frontend code - it's designed for client-side use and has built-in rate limiting.