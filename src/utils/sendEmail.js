/**
 * sendEmail — thin wrapper around the /api/send-email endpoint
 * Works in dev (via Vite proxy) and production (same-origin or env-configured URL).
 *
 * @param {'contact'|'quote'} type   - Which form is submitting
 * @param {object}            data   - Form payload (merged with type)
 * @returns {Promise<{success:boolean, error?:string}>}
 */
export async function sendEmail(type, data) {
  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, ...data }),
    });

    const json = await res.json();

    if (!res.ok || !json.success) {
      throw new Error(json.error || `Server returned ${res.status}`);
    }

    return { success: true };
  } catch (err) {
    console.error('[sendEmail]', err);
    return { success: false, error: err.message };
  }
}
