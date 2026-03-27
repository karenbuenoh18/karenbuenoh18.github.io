/*
  # Create Portfolio and Bitácora Schema

  1. New Tables
    - `bitacora_notes` - Personal learning notes, articles, reflections
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text, markdown)
      - `excerpt` (text, short preview)
      - `category` (text: lectura, idea, aprendizaje, reflexion)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `published` (boolean)

    - `projects` - Digital projects and work
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image_url` (text)
      - `technologies` (text array)
      - `github_url` (text, optional)
      - `demo_url` (text, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Public read access for published content
    - No write access from public (managed by admin only)
*/

CREATE TABLE IF NOT EXISTS bitacora_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  excerpt text NOT NULL,
  category text NOT NULL DEFAULT 'aprendizaje',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  published boolean DEFAULT true
);

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text,
  technologies text[] DEFAULT ARRAY[]::text[],
  github_url text,
  demo_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bitacora_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published notes"
  ON bitacora_notes
  FOR SELECT
  TO public
  USING (published = true);

CREATE POLICY "Anyone can read projects"
  ON projects
  FOR SELECT
  TO public
  USING (true);