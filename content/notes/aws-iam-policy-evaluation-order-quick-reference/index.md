+++
title = "AWS IAM Policy Evaluation Order (Quick Reference)"
date = 2024-05-10
draft = false
categories = ["aws", "iam"]
description = "A concise reference for AWS IAM policy evaluation order."
+++

IAM policy evaluation follows a strict order:

1. Explicit deny
2. SCPs
3. Resource-based policies
4. Identity-based policies
5. Session policies

When debugging access issues, always start with explicit denies.
