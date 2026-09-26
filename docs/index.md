---
title: Home
hide:
  - navigation
  - toc
  - footer
---

<style>
  /* Capsule Button */
  .capsule-btn {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.65rem;
    font-weight: 600;
    border: 1px solid var(--md-default-fg-color--lighter);
    text-decoration: none;
    color: var(--md-default-fg-color);
    transition: all 0.2s ease;
  }
  .capsule-btn:hover {
    color: var(--md-primary-fg-color);
    border-color: var(--md-primary-fg-color);
    text-decoration: underline;
  }

 /* Post Layout (Title Left, Date Right) */
 .post-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    
  }
  
  .post-date {
    font-size: 0.75rem;
    color: var(--md-default-fg-color--light);
    white-space: nowrap; 
  }

  /* Custom Blog Title */
  .blog-posts a.astro-title {
    font-size: 0.9rem !important;
    font-weight: 500 !important;
    margin: 0 0 0.1rem 0 !important; 
    line-height: 1.2 !important;
    display: block !important; 
    color: var(--md-default-fg-color) !important;
    text-decoration: none !important;
    transition: color 0.2s ease;
  }
  .blog-posts a.astro-title:hover {
    color: var(--md-primary-fg-color) !important;
  }

  /* Description text styling (spacing now handled on the wrapping <p>, see below) */
  .blog-desc {
    display: block;
    font-size: 0.75rem;
    color: var(--md-default-fg-color--light);
    border-bottom: 1px solid var(--md-default-fg-color--lighter);
  }

  /* The Markdown parser wraps each .blog-desc span in its own <p> - these
     <p> tags are the real siblings under .blog-posts, so spacing and
     last-of-type logic both belong here, not on the span itself. */
  .md-typeset .blog-posts p {
    margin: 0 0 1.6rem 0 !important;
    padding: 0 !important;
  }
  .md-typeset .blog-posts p:last-of-type {
    margin-bottom: 0 !important;
  }
</style>

<div class="homepage-wrapper" style="max-width: 34.5rem; margin: 0 auto; padding: 0 0 2rem 0;" markdown>

# Hey, I'm Manojit {.hero-heading}

Senior Consultant @Deloitte — Cloud Security, DevSecOps & AI. Welcome to my knowledge base, I document my learnings here to solidify what I learn, keep a reference for later, and leave a trail of breadcrumbs for anyone else trying to figure out the same tech.

---

## My Credentials

<div style="margin: 1.5rem 0;" markdown>
[![CISSP Badge](about/images/cissp.png){ width="110" .cert-badge }](https://www.credly.com/badges/8d48a7c7-dfff-4f5d-ac73-6e9a875d2808/public_url)
[![CISM Badge](about/images/cism.png){ width="110" .cert-badge }](https://www.credly.com/badges/97ecb02a-87e6-459e-9f12-ec15bb67b704/public_url)
[![SC 900](about/images/sc900.png){ width="110" .cert-badge }](https://learn.microsoft.com/en-us/users/manojitnath-5303/credentials/b98f61174257f80e?ref=https%3A%2F%2Fwww.linkedin.com%2F)
[![ISO 27001](about/images/iso27001.png){ width="110" .cert-badge }](https://www.linkedin.com/in/manojitnath/details/certifications/)
</div>

---

## Latest Posts

<div style="margin: 1.5rem 0 1rem 0;" class="blog-posts" markdown>

<div class="post-header"><a href="/" class="astro-title">Automating AWS EBS Backups with Lambda</a><span class="post-date">September 25</span></div>
<span class="blog-desc">A quick walkthrough on scheduling snapshots.</span>

<div class="post-header"><a href="/" class="astro-title">Why I stopped using bash and switched to zsh</a><span class="post-date">September 12</span></div>
<span class="blog-desc">Quality of life improvements for the terminal.</span>

<div class="post-header"><a href="/" class="astro-title">Demystifying Kubernetes Pod Networking</a><span class="post-date">August 30</span></div>
<span class="blog-desc">How IPs are actually assigned across nodes.</span>

</div>

<div style="margin-top: 0.2rem;">
  <a href="/blog" class="capsule-btn">View all &rarr;</a>
</div>

---

## Fundamentals

The core building blocks. You have to understand how the system works before you can scale it or secure it.

<div class="grid cards" markdown>

-   :lucide-terminal: &nbsp; **Linux Baselines**

    ***

    Core OS concepts, process management, permissions, and internal networking.

    [:octicons-arrow-right-24: Start Linux](/)

-   :lucide-network: &nbsp; **Networking**

    ***

    TCP/IP stack, DNS, TLS/SSL, firewalls, and deep traffic analysis.

    [:octicons-arrow-right-24: Start Networking](/)

</div>

<div style="margin-top: 0.2rem;">
  <a href="/foundations" class="capsule-btn">View all &rarr;</a>
</div>

---

## Cloud & DevOps

Once the fundamentals are solid, it's time to scale. These are the tools and platforms I use to build automated, highly-available infrastructure.

- **Containers & Orchestration:** [Docker](/) • [Kubernetes](/)
- **Infrastructure as Code:** [Terraform](/) • [Ansible](/)
- **Cloud Platforms:** [AWS Architecture](/) • [Serverless](/)
- **CI/CD Pipelines:** [GitHub Actions](/) • [GitLab CI](/)

<div style="margin-top: 0.2rem;">
  <a href="/" class="capsule-btn">View all &rarr;</a>
</div>

---

## Applied Security

Learning how a tool works is step one. Step two is learning how attackers exploit it, and step three is locking it down.

- **[Cloud Security & IAM](/):** Least privilege policies, auditing, and VPC endpoints.
- **[Docker Hardening](/):** Rootless containers, image scanning, and dropping capabilities.
- **[Kubernetes Security](/):** RBAC, Network Policies, and securing the kubelet.
- **[Web Application Firewalls](/):** Configuring WAF rules and reverse proxy security.

<div style="margin-top: 0.2rem;">
  <a href="/" class="capsule-btn">View all &rarr;</a>
</div>

---

## Projects

Putting the theory into practice. Here are a few environments I've built.

<div class="grid cards" markdown>

-   :lucide-server: &nbsp; **Highly Available Web Stack**

    ***

    A load-balanced Nginx setup across multi-AZ EC2 instances using Terraform.

    [:octicons-arrow-right-24: View Project](/)

-   :lucide-shield-check: &nbsp; **Hardened Home Lab**

    ***

    A local Proxmox environment with strict VLAN segmentation & DNS sinkholing.

    [:octicons-arrow-right-24: View Project](/)

</div>

<div style="margin-top: 0.2rem;">
  <a href="/projects" class="capsule-btn">View Projects &rarr;</a>
</div>

</div>
