export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://kca-be.onrender.com';

export function getMediaUrl(url: string) {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${API_URL}${url.startsWith('/') ? '' : '/'}${url}`;
}

// ── AUTH ──────────────────────────────────────────────────────────────
export async function login(email: string, password: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).message || 'Login failed');
  return res.json();
}

// ── UPLOAD ────────────────────────────────────────────────────────────
export async function uploadImage(file: File | Blob, token: string) {
  const formData = new FormData();
  
  // If it's a File object, use its name, otherwise default
  const filename = (file as File).name || 'upload.png';
  formData.append('file', file, filename);

  const res = await fetch(`${API_URL}/upload/image`, {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${token}`
      // Note: Do NOT set Content-Type header, let the browser set it with the boundary
    },
    body: formData,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Upload failed');
  }
  
  return res.json(); // { url, id }
}

// ── PAGE MEDIA ────────────────────────────────────────────────────────
export async function getPageMedia(page: string) {
  const res = await fetch(`${API_URL}/page-media/${encodeURIComponent(page)}`);
  if (!res.ok) { if (res.status === 404) return null; throw new Error('Failed to fetch page media'); }
  return res.json();
}

export async function updatePageMedia(page: string, data: any, token: string) {
  const res = await fetch(`${API_URL}/page-media/${encodeURIComponent(page)}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).message || 'Failed to update page media');
  return res.json();
}

// ── LEADS (Book Demo) ─────────────────────────────────────────────────
export async function createLead(data: {
  parentName: string; childName: string; childAge: number;
  programInterested: string; phone: string; email: string; source: string;
}) {
  const res = await fetch(`${API_URL}/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).message || 'Failed to submit');
  return res.json();
}

export async function getLeads(token: string) {
  const res = await fetch(`${API_URL}/leads`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch leads');
  return res.json();
}

export async function updateLeadStatus(id: string, status: string, token: string) {
  const res = await fetch(`${API_URL}/leads/${id}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error('Failed to update lead status');
  return res.json();
}

// ── CONTACTS ──────────────────────────────────────────────────────────
export async function createContact(data: {
  firstName: string; lastName: string; email: string; phone: string;
  addressLine1: string; addressLine2?: string; city: string;
  state: string; zipCode: string; country: string; message: string;
}) {
  const res = await fetch(`${API_URL}/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).message || 'Failed to submit');
  return res.json();
}

export async function getContacts(token: string) {
  const res = await fetch(`${API_URL}/contacts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch contacts');
  return res.json();
}

export async function updateContactStatus(id: string, status: string, token: string) {
  const res = await fetch(`${API_URL}/contacts/${id}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error('Failed to update contact status');
  return res.json();
}

// ── FRANCHISE ─────────────────────────────────────────────────────────
export async function createFranchise(data: {
  fullName: string; phone: string; email: string; franchiseType: string;
}) {
  const res = await fetch(`${API_URL}/franchise`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).message || 'Failed to submit');
  return res.json();
}

export async function getFranchises(token: string) {
  const res = await fetch(`${API_URL}/franchise`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch franchise inquiries');
  return res.json();
}

// ── TEACHER TRAINING ──────────────────────────────────────────────────
export async function createTeacherApplication(data: {
  fullName: string; phone: string; email: string; specialization: string;
}) {
  const res = await fetch(`${API_URL}/teacher-training`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).message || 'Failed to submit');
  return res.json();
}

export async function getTeacherApplications(token: string) {
  const res = await fetch(`${API_URL}/teacher-training`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch applications');
  return res.json();
}

// ── INSTITUTIONS ──────────────────────────────────────────────────────
export async function createInstitution(data: {
  institutionName: string; contactPerson: string; phone: string; email: string;
}) {
  const res = await fetch(`${API_URL}/institutions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).message || 'Failed to submit');
  return res.json();
}

export async function getInstitutions(token: string) {
  const res = await fetch(`${API_URL}/institutions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch institution inquiries');
  return res.json();
}

// ── NEWSLETTER ────────────────────────────────────────────────────────
export async function subscribeNewsletter(email: string) {
  const res = await fetch(`${API_URL}/newsletter/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).message || 'Failed to subscribe');
  return res.json();
}

export async function getNewsletterSubscribers(token: string) {
  const res = await fetch(`${API_URL}/newsletter/subscribers`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch subscribers');
  return res.json();
}
