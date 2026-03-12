# PoseVenture MVP Product Requirements Document

## 1. Product Overview

PoseVenture is an AI-powered venture discovery platform.

The product helps users transform vague startup thoughts, weak signals, and observed problems into one clear venture opportunity.

PoseVenture is NOT an idea generator.

The core value is helping users sharpen opportunity clarity and gain confidence in one venture direction.

Core message:
"You don't need more ideas. You need confidence in one opportunity."

---

## 2. MVP Goal

The goal of this MVP is to allow users to experience the Stage 1 Venture Discovery flow and feel that the product helps them clarify a real venture opportunity.

The MVP should feel like a premium AI discovery tool rather than a simple idea generator.

Success criteria:

- A user can complete discovery in under 1 minute
- The result feels insightful and structured
- The product feels like a serious startup decision tool

---

## 3. Target Users

Primary users:
- early-stage founders exploring startup opportunities

Secondary users:
- solo founders
- professionals considering starting a business
- domain experts exploring startup opportunities

---

## 4. MVP Scope

### Included

Landing page  
User authentication (Supabase)  
Discovery input page  
Discovery result page  
User result history (saved discoveries)  
AI discovery engine  
API routes for discovery  

### Excluded

Payment / subscription  
Advanced business analysis (Stage 2)  
Market validation tools (Stage 3)

---

## 5. Core User Flow

1. User visits landing page
2. User clicks "Start Discovery"
3. User logs in (Supabase Auth)
4. User fills discovery form
5. User submits discovery request
6. AI generates venture discovery
7. Result page shows opportunity insight
8. Result is saved to user history

---

## 6. Pages

### Landing Page

Route:

/


Purpose:
Explain PoseVenture value and encourage discovery.

Key elements:

Hero section  
Clear headline and subheadline  
Explanation of venture discovery  
Call-to-action button  

CTA:

Start Discovery

---

### Discovery Page

Route:

/discover


Purpose:

Collect user inputs for venture discovery.

Inputs:

segment  
symptom  
problem  

Descriptions:

Segment:
Who are you thinking about?

Symptom:
What interesting signal or change have you noticed?

Problem:
What frustration, unmet need, or emerging desire exists?

---

### Result Page

Route:

/result


Purpose:

Display AI-generated venture discovery.

Output structure:

target  
problem  
insight  
opportunity  

Goal:

The result should feel like a refined venture opportunity rather than a random startup idea.

---

### User History

Route:

/history


Purpose:

Allow users to see past discoveries.

Each record shows:

date  
target  
opportunity summary

---

## 7. AI Discovery Engine

Stage 1 discovery uses AI to transform user inputs into a structured venture insight.

Input:

segment  
symptom  
problem  

Output:

target  
problem  
insight  
opportunity  

The output should be structured and clear.

---

## 8. Tech Stack

Frontend:

Next.js App Router  
TypeScript  
Tailwind CSS  
shadcn/ui  

Backend:

Next.js API routes  
AI SDK  
OpenAI  
Google Gemini  

Database:

Supabase

Authentication:

Supabase Auth

Deployment:

Vercel

---

## 9. Data Model (Initial)

Discovery

Fields:

id  
user_id  
segment  
symptom  
problem  

target  
insight  
opportunity  

created_at

---

## 10. Development Priority

Build in this order:

1. Landing page
2. Supabase authentication
3. Discovery page
4. Discovery API route
5. Result page
6. Save discovery to database
7. History page

---

## 11. UX Principles

The UI should feel like a premium AI startup tool.

Guidelines:

Simple interface  
Fast interaction  
Clear hierarchy  
Minimal clutter  

Avoid feeling like a generic AI chatbot.

The product should feel like a focused venture discovery system.

---

## 12. Key Product Language

Preferred terms:

venture opportunity  
opportunity discovery  
opportunity sharpening  

Avoid overusing:

startup idea generator  
idea brainstorming

