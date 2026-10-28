---
title: "I built an AI receptionist for a company that doesn't exist"
description: "A working demo receptionist that answers, qualifies and files a lead — and an honest account of what is real and what is fake."
date: 2026-10-28
---

Most small businesses do not lose customers because they are bad at the work. They lose them
because nobody answered the phone at 7pm on a Tuesday.

An AI receptionist is the obvious answer, and there are now hundreds of them. Most are a prompt
wrapped around a voice platform. They answer questions competently and then the lead evaporates,
because nothing was wired into anything.

So I built one, and made the interesting part visible.

## What the demo is

[Northgate Heating & Air](/ai-receptionist) is a fictional HVAC company in Portland, Oregon. Its
receptionist is real: a live n8n workflow with a language model behind it, a fixed knowledge base,
and a booking flow.

Ask it about opening hours and it answers from the knowledge base. Ask it to install a furnace and it
declines to quote, because it is instructed not to invent prices. Say you smell gas and it stops the
booking flow, gives you the emergency line, and still files the lead tagged urgent. Complete a booking
and a structured record lands in a table and an email arrives.

The conversation is the easy part. The record is the point.

## What is real

- The model, the workflow, and the conversation are live.
- Answers are grounded in one block of company facts, not free invention.
- A completed booking produces a structured lead and a real email notification.
- The page is protected by a bot challenge, a rate limit, and a server-side proxy that keeps the
  workflow endpoint out of the page source.

## What is fake

- Northgate does not exist. The phone number is a reserved fictional number.
- The three appointment windows are fixed strings, not live calendar availability.
- Leads go to a sandbox table. In a real build they go to FileMaker, a CRM, or your calendar.
- No payment is taken and no appointment is created.

I would rather tell you that up front than have you ask.

## Why the write-back is the product

Anyone can put a chatbot on a page. The reason to hire someone is the last step: the lead arrives
somewhere the business already looks, in a shape the business already understands.

That is why the demo writes a structured record rather than an email transcript. Same data, whether
it ends up in FileMaker, HubSpot, Airtable, or a Google Sheet. The receptionist is the front door. The
integration is the building.

## What it costs

The package is deliberately small: one workflow, one knowledge base, one place for leads to land, and
a handover so you can run it without me. Build is $750 to $1,500. Hosting and maintenance is $99 to
$199 a month, which covers monitoring, prompt and knowledge-base updates, and a monthly look at what
customers actually asked.

## One honest limitation

This demo is chat-only. Phone is where most of the demand is, and a phone build uses a voice platform
such as Vapi or Retell in front of the same workflow. The reasoning, the qualification and the
booking logic do not change; only the channel does.

If you want to try it, [the demo is here](/ai-receptionist). If you want one for your business,
[get in touch](/contact).
