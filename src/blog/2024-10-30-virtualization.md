---
title: Virtualization
description: First Lab
author: Dave Samuels
date: 2024-10-30T19:01:00.000Z
tags:
  - post
image: /assets/blog/blog-1-hero-pic.jpg
imageAlt: VMware Fusion 13
---
## Introduction

<p> This is my journey in diving into Active Directory and learning about the vast possibilities that this services has to offer. </p>

## Virtualization Setup Process

<p> I believe setting up a virtual machine is the most practical approach for learning about various Windows settings. A virtual machine provides a sandbox environment, so if I make mistakes with the settings on Windows or within the VM itself, I can simply discard the VM and create a new one, keeping my host PC unaffected. I decided to use VMware as my virtual machine manager, specifically VMware Fusion 13, as my host PC is a Mac. </p>

### Installing VMware Fusion 13 on Mac

<p> Navigate to the directory where you saved the downloaded installer, and then run the installer file. </p>

<br>
<br>

![ 500](/assets/blog/blog-1-figure-01.png)
<br>
<br>

### Installing Windows Server 2022 iso file

<p> I will be using Windows Server 2022 as my server to control different PCs with other VMs using Active Directory.  Go to https://www.microsoft.com/en-us/evalcenter and click on Windows Server then Windows Server 2022. </p>
<br>
<br>

![Blog 1 Windows Server 2022 01](/assets/blog/winserver-2022-1.png)

<br>
<br>

<p> 1. Click on "Download the ISO". </p>
<br>
<br>

![ 500](/assets/blog/winserver-2022-2.png)
<br>
<br>

<p> 2. Fill out the registry form to start the free trial. </p>
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

![](/assets/blog/vmware-easy-installation-method-1.png)

<br>

<br>

5. Choose the firmware type that will be booting your virtual machine. I opted for the UEFI boot firmware.

<br>
<br>

![](/assets/blog/winserver-2022-4.png)

<br>

<br>

6. Click on Finish and name the virtual machine whatever you want and then save it. 

<br>
<br> 

![](/assets/blog/winserver2022-5.png)

<br>
<br>

7. Navigate to the navbar for VMware and click on "Virtual Machine" and then "Settings".
   <br>
   <br>

![](/assets/blog/winserver2022-07-edit.png)

<br>
<br>

8. Click on CD/Data (SATA) and confirm that the correct iso is selected for "This CD/DVD drive is configured to use the following: " . Then make sure you check the checkbox for "Connect CD/DVD Drive". This process was not done automatically for me and I could not get my Virtual Machine to run until I did this step.
   <br>
   <br>

![](/assets/blog/winserver2022-08-edit.png)

<br>
<br>

9. Go back to the settings panel and click on "Processors & Memory". Allocate the appropriate processor core and memory for your virtual machine. I intend on running applications like Zoom, PDQ Deploy and PDQ Inventory so it is always a good idea to check for the PC requirements needed to run certain applications. I decided that 2 processor cores and 4gb of memory was enough for my intended use. You can always go into the "Processors & Memory" and change the specs of your VM at anytime. You can only change those settings when the VMware is shut down.
   <br>
   <br>

![](/assets/blog/winserver2022-09-edit.png)

<br>
<br> 

10. Click on the play button on the your VWmware window or click on "Virtual Machine" in the navbar and click on "Start Up".

<br>
<br> 

11. Chose the appropriate options for "Language to install:, "Time and currency format:, and Keyboard or input method: " pertaining to you.

<br>
<br> 

![](/assets/blog/winserver2022-10-edit.png)

<br>
<br>

12. Click on "Install now".

<br>
<br>



![](/assets/blog/winserver2022-11-edit.png)

<br>
<br>

13. I opted for Windows Server 2022 Standard Evaluation Desktop Experience. If you pick the "Windows Server 2022 Evaluation" instead of the Desktop Experience, you will not get the user interface. You will have to use console commands to navigate around your PC.
    <br> 
    <br> 



![](/assets/blog/winserver2022-12-edit.png)

<br>
<br>

14. Agree to the Microsoft Software License Terms.

<br>
<br>



![](/assets/blog/winserver2022-13-edit.png)

<br>
<br>
15. Choose Custom install since we are setting up Windows Server for the first time. We don't have anything already installed in order to use the upgrade installation method.
<br>
<br>

!\[[WinServer2022 14.png | 600]]

<br>
<br>
16. Click on "Next".
<br>
<br>

!\[[WinServer2022 15.png | 600]]

<br>
<br>
17.  Wait for the operating system to finish installing.
<br>
<br>

!\[[WinServer2022 16.png | 600]]

<br>
<br>
18. Set a password for your Administrator account.
<br>
<br>

!\[[WinServer2022 17.png | 600]]

<br>
<br>

19. When you setup a new virtual machine, it is a good idea to change your PC name into something you can remember. This will lead to less confusion if you are working with multiple VMs. Go into File Explorer and right click on "This PC".
    <br>
    <br>

!\[[WinServer2022 Setup 01.png | 600]]

<br>
<br>
20. Click on "Rename this PC"
<br>
<br>

!\[[WinServer2022 Setup 02.png | 600]]

<br>
<br>
21. Rename your PC into something you can remember. Desktop1 is easier to remember than WIN-09C2HTAM7SC.
<br>
<br>

!\[[WinServer2022 Setup 03.png | 600]]
<br>
<br>

21. When setting up a new Virtual Machine environment, it is also a good idea to adjust your PC for the best performance. By doing this the PC on your VM will download things faster and run smoother. Go into the Properties settings for "This PC" and click on "Advanced system settings".
    <br>
    <br>

!\[[WinServer2022 Setup 04.png | 600]]

<br>
<br>
22. Click Settings under Performance.
<br>
<br>

!\[[WinServer2022 Setup 05.png | 600]]

<br>
<br>
23. Click the "Adjust for best performance" button. Then click "Apply" then "Ok".
<br>
<br>

!\[[WinServer2022 Setup 06.png | 600]]

### Note/WIP Active Directory Domain Services Installation

Go over how to install active directory. It is not installed by default.

<br>
<br>

1. Navigate to "Manage" in the Server Manager navbar and click on "Add Roles and Features".
   <br>
   <br>
   !\[[AD Install_01.png | 600]]
   <br>
   <br>
2. Click on "Next"
   <br>
   <br>

!\[[AD Install_02.png]]
<br>
<br>

3. Select an installation type. I opted for "Role-based or feature-based installation".
   <br>
   <br>

!\[[AD Install_03.png]]
<br>
<br>

4. We will be installing Active Directory Services on our server so select "Select a server from the server pool".
   <br>
   <br>

!\[[AD Install_04.png | 600]]
<br>
<br>

5. Select "Active Directory Domain Services".
   <br>
   <br>

!\[[AD Install_05.png | 600]]
<br>
<br>

6. Click on "Add Features".
   <br>
   <br>

!\[[AD Install_06.png | 600]]
<br>
<br>

7. Click on "Next".
   <br>
   <br>

!\[[AD Install_07.png | 600]]
<br>
<br>

8. Click on "Next".
   <br>
   <br>

!\[[AD Install_08.png]]
<br>
<br>

9. Click on "Install"
   <br>
   <br>

!\[[AD Install_09.png]]
<br>
<br>

### Summary

Within this lab I installed a Virtual Machine using VMWare that uses Windows Server 2022. I also setup an admin account on Windows Server 2022 and installed Active Directory Domain Services. This will allow me to add/remove a user on my network, reset the password of a user. I also renamed my PC into something relevant and rememberable because I will be working with other VMs that uses Windows 10/11. Then I also went into the advanced system setting on my PC to adjust the best performance.
