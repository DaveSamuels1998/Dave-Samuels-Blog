---
title: Setting up Virtualization
description: First Helpdesk Lab
author: Dave Samuels
date: 2024-07-12T02:40:00.000Z
tags:
  - post
image: /assets/blog/blog-1-figure-1.png
imageAlt: VMware Fusion
---


![]()

### Introduction

This is my journey in diving into Active Directory and learning about the vast possibilities that this services has to offer.

## Virtualization Setup Process

I believe setting up a virtual machine is the most practical approach for learning about various Windows settings. A virtual machine provides a sandbox environment, so if I make mistakes with the settings on Windows or within the VM itself, I can simply discard the VM and create a new one, keeping my host PC unaffected. I decided to use VMware as my virtual machine manager, specifically VMware Fusion 13, as my host PC is a Mac. 

### Installing VMware Fusion 13 on Mac

Navigate to the directory where you saved the downloaded installer, and then run the installer file. 

!\[[Blog 1 Figure 1.png | 500]]

### Installing Windows Server 2022 iso file

I will be using Windows Server 2022 as my server to control different PCs with other VMs using Active Directory.  Go to https://www.microsoft.com/en-us/evalcenter and click on Windows Server then Windows Server 2022.

![[Blog 1 Windows Server 2022 01.png | 500]]

Click on "Download the ISO".

!\[[Blog 1 Windows Server 2022 02.png | 500]]

File out the registry form to start the free trial.

!\[[Blog 1 Windows Server 2022 03.png | 500]]

Open VMware and you will be greeted with an installation method page. For this example I will install from disc or image since I manually download the Windows Server 2022 iso file.

!\[[Blog 1 Installation Method.png | 500]]

For this example I will not be using the easy install method. I also decided to fill in the password text field.

!\[[VMware easy installation method.png | 500]]

!\[[Blog 1 Windows Server 2022 04.png]]

!\[[Blog 1 Windows Server 2022 05.png]]

When you setup a new virtual machine, open up the file manager and rename the PC to something familiar. I do this for better navigation so I won't get confused.

Then I would go into the advance settings in the "This PC" property settings and change the "Performance" settings to "adjust for best performance". That way the virtual machine can run fast.

Look into the Group Policy editor. What does it do and what are the pc configuration you can change within the Group Policy editor.

Lab processes so far

1. Installed Virtual Machines using Windows 11 and Windows Server 2022.
2. I installed active directory domain services on Windows Server 2022. This will allow me to add/remove a user on my network, reset the password of a user.

## Potential interview question

### What is the feature that someone with a server manager role has that containerizes and maintains users computers and OUs?

Answer: Active directory users and computers.

### How to find a user in an active directory?

Answer: In the manager server you click on "active directory users and computers" and then you right click on the computers directory and click on "find". Then you click on the directory navigation and click on "entire directory". You do this because the user may not be in the computer directory or within a certain OU so searching from entire directory will search everything. You should see the user show up after this step. 

You can click on "view" in the navigation bar within active directory users and computers and click on advanced features. This will give addition information about users whenever you search for them. If I repeat the steps in order to find a users within the active directory, I can see which directory they are in.

## Enable Recycle Bin

Enabling recycle bin is useful because if you delete something by accident you can retrieve. 

#### Steps to enable recycle bin

1. Go to the Windows Start button and search for "windows administrative tools"
2. Look for "Active Directory Administrative Center"
3. Click on your local domain name
4. Enable Recycle bin (located to the right sidebar).
