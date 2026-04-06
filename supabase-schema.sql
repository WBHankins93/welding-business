-- =============================================================
-- DJN Services LLC — Form Submissions Schema
-- Run this in the Neon SQL Editor:
-- Dashboard > your project > SQL Editor
-- =============================================================

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  submitted_at TIMESTAMPTZ DEFAULT now()
);

-- Booking form submissions
CREATE TABLE IF NOT EXISTS booking_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT NOT NULL,
  project_type TEXT NOT NULL,
  location TEXT NOT NULL,
  preferred_date TEXT NOT NULL,
  preferred_time TEXT NOT NULL,
  description TEXT NOT NULL,
  submitted_at TIMESTAMPTZ DEFAULT now()
);
