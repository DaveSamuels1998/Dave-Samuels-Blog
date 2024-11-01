---
title: Virtualization
description: First Lab
author: Dave Samuels
date: 2024-10-30T19:01:00.000Z
tags:
  - post
image: /assets/blog/blog-1-figure-1.png
imageAlt: VMware Fusion 13
---
## Introduction

<p> This is my journey in diving into Active Directory and learning about the vast possibilities that this services has to offer. </p>

## Virtualization Setup Process

<p> I believe setting up a virtual machine is the most practical approach for learning about various Windows settings. A virtual machine provides a sandbox environment, so if I make mistakes with the settings on Windows or within the VM itself, I can simply discard the VM and create a new one, keeping my host PC unaffected. I decided to use VMware as my virtual machine manager, specifically VMware Fusion 13, as my host PC is a Mac. </p>

### Installing VMware Fusion 13 on Mac

<p> Navigate to the directory where you saved the downloaded installer, and then run the installer file. </p>

![ 500](/assets/blog/blog-1-figure-01.png)

### Installing Windows Server 2022 iso file

<p> I will be using Windows Server 2022 as my server to control different PCs with other VMs using Active Directory.  Go to https://www.microsoft.com/en-us/evalcenter and click on Windows Server then Windows Server 2022. </p>

![Blog 1 Windows Server 2022 01](/assets/blog/winserver-2022-1.png)
&nbsp;
<br>
<br>

<p> 1. Click on "Download the ISO". </p>
<br>
<br>


![ 500](/assets/blog/winserver-2022-2.png)
<br>
<br>

<p> 2. File out the registry form to start the free trial. </p>
<br>
<br>


![ 500](/assets/blog/winserver-2022-3.png)
<br>
<br>


<p> 3. Open VMware and you will be greeted with an installation method page. For this example I will install from disc or image since I manually download the Windows Server 2022 iso file. </p>

<br>
<br>

![ 500](/assets/blog/blog-1-installation-method-1.png)
<br>
<br>

<p> 4. For this example I will not be using the easy install method. I also decided to fill in the password text field. </p>

<br>
<br>

![ 500](/assets/blog/vmware-easy-installation-method-1.png)
<br>
<br>

![Blog 1 Windows Server 2022 04](/assets/blog/winserver-2022-4.png)
<br>
<br>

![Blog 1 Windows Server 2022 05](/assets/blog/winserver2022-5.png)
<br>
<br>

<p> When you setup a new virtual machine, open up the file manager and rename the PC to something familiar. I do this for better navigation so I won't get confused. </p>

<p> Then I would go into the advance settings in the "This PC" property settings and change the "Performance" settings to "adjust for best performance". That way the virtual machine can run fast. </p>

<p> Look into the Group Policy editor. What does it do and what are the pc configuration you can change within the Group Policy editor. </p>

Lab processes so far

1. Installed Virtual Machines using Windows 11 and Windows Server 2022.
2. I installed active directory domain services on Windows Server 2022. This will allow me to add/remove a user on my network, reset the password of a user.

## Potential interview question

### What is the feature that someone with a server manager role has that containerizes and maintains users computers and OUs?

Answer: Active directory users and computers.

### How to find a user in an active directory?

<p> Answer: In the manager server you click on "active directory users and computers" and then you right click on the computers directory and click on "find". Then you click on the directory navigation and click on "entire directory". You do this because the user may not be in the computer directory or within a certain OU so searching from entire directory will search everything. You should see the user show up after this step. 
You can click on "view" in the navigation bar within active directory users and computers and click on advanced features. This will give addition information about users whenever you search for them. If I repeat the steps in order to find a users within the active directory, I can see which directory they are in. </p>

## Enable Recycle Bin

Enabling recycle bin is useful because if you delete something by accident you can retrieve. 

#### Steps to enable recycle bin

1. Go to the Windows Start button and search for "windows administrative tools"
2. Look for "Active Directory Administrative Center"
3. Click on your local domain name
4. Enable Recycle bin (located to the right sidebar).
