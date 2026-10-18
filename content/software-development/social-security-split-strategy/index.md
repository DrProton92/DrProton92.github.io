---
title: Social Security Split Strategy
type: project
date: 2026-10-02
summary: Compare monthly and cumulative Social Security benefits when the lower earner claims at 62 and the higher earner claims at different ages.
aliases:
  - /software-development/workflow-dashboard/
  - /software-development/workflow-dashboard/implementation/
image:
  alt: Illustration of monthly and cumulative benefits charts comparing claiming strategies.
---

[Open Social Security Split Strategy](https://agreeable-forest-0e2ffe810.2.azurestaticapps.net/)

This interactive web application compares Social Security claiming scenarios for a couple. Enter each spouse's monthly benefit at full retirement age, then explore how the higher earner's claiming age changes combined monthly and cumulative benefits while the lower earner claims at 62.

## Compare claiming strategies

Select the higher earner's claiming ages to display on two charts: total monthly benefits and cumulative benefits over time. Show or hide individual strategies to make comparisons easier.

## Inspect the calculations

A calculation report breaks down each selected strategy, including the higher earner's benefit, the lower earner's own benefit, and any spousal top-off modeled by the application.

The model assumes both spouses are the same age, have a full retirement age of 67, and remain alive throughout the modeled period. It does not include inflation adjustments.
