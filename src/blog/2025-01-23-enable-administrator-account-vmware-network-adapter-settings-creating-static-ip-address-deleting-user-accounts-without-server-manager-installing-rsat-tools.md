---
title: Enable Administrator Account, VMware Network Adapter Settings, Creating
  Static IP Address, Deleting User Accounts without Server Manager, Installing
  RSAT Tools
description: Third Lab Series
author: Dave Samuels
date: 2025-01-17T10:30:00.000Z
tags:
  - post
  - featured
image: /assets/blog/article-2.jpg
imageAlt: Third Installment
---
### Introduction

<br>
<br>

Today, I will be installing Windows 10 and Windows 11 on two separate virtual machines using VMware and joining them to a domain. I will demonstrate the installation process once, as it is very similar for Windows 10 and 11, and highlight any differences as they arise. One of the VMs will serve as my Helpdesk PC, named "Desktop1". On the Helpdesk PC, I will perform various troubleshooting tasks, such as resetting user passwords and enabling or disabling accounts. The second PC, named "Desktop2", will act as a user PC that interacts with the Helpdesk PC. 

<br>
<br>

### Installing Windows 10/11 iso

<br>

<br>

1. Go to the <a href="https://www.microsoft.com/en-us/software-download/windows10ISO" target="_blank">Download Windows 10</a> or <a href="https://www.microsoft.com/en-us/software-download/windows11" target="_blank">Download Windows 11</a> site.

<br>
<br>

2. Select the edition you want and then click "Confirm".

<br>
<br>

![](/assets/blog/win10iso-install-1.png)

<br>
<br>

![](/assets/blog/win11iso-install-1.png)

<br>
<br>

3. Select the language for your Windows installation.

<br>
<br>

![](/assets/blog/win10iso-install-2.png)

<br>
<br>

4. Select either the 32-bit or 64-bit download for Windows 10. I selected the 64-bit version. Windows 11 offers only the 64-bit option.

<br>
<br>

![](/assets/blog/win10iso-install-3.png)

<br>
<br>

### Setup up Windows 10/11 on VMware

<br>
<br>

1. Click the "Install from disc or image" button on the top.
   <br>
   <br>

![](/assets/blog/win10-vm-user-1.png)

<br>
<br>

2. Choose the Windows 10/11 iso and then click 'Continue.'
   <br> 
   <br>

![](/assets/blog/win10-vm-user-2.png)

<br>
<br>

3. I recommend using 'Easy Install' because it enables the administrator account by default. However, I will be enabling the administrator account directly on the Windows 10 machine, so I chose not to use Easy Install. I'm doing this to demonstrate how to enable the administrator account on Windows 10/11 in case it is ever disabled and you need to enable it.
   <br>
   <br>

![](/assets/blog/win10-vm-user-3.png)

<br>
<br>

4. Specify the boot firmware you want to use. I am using the default firmware, which is 'UEFI.'
   <br>
   <br>

![](/assets/blog/win10-vm-user-4.png)

<br>
<br>

5. You can name the VM whatever you like.
   <br>
   <br>

![](/assets/blog/win10-vm-user-5.png)

<br>
<br>

6. Click the play button in VMware, and the installation process for Windows 10/11 will begin.

<br>
 <br>

7. Choose the appropriate options for 'Language to install,' 'Time and currency format,' and 'Keyboard or input method' that pertain to you.
   <br>
   <br>

![](/assets/blog/win10-vm-user-6.png)

<br>
<br>

8. Click "Install now"
   <br>
   <br>

![](/assets/blog/win10-vm-user-7.png)

<br>
<br>

9. I won't activate Windows, so I will click 'I don't have a product key.'
   <br>
   <br>

![](/assets/blog/win10-vm-user-8.png)

<br>
<br>

10. I will be setting up this PC for a lab environment and will be joining it to a domain. Therefore I will be choosing "Windows 10 Pro".
    <br>
    <br>

![](/assets/blog/win10-vm-user-9.png)

<br>
<br>

11. Accept the license terms and click "Next".

<br>
<br>

![](/assets/blog/win10-vm-user-10.png)

<br>
<br>

12. Click "Custom: Install Windows only(advanced)". I do not have anything installed yet to upgrade.
    <br>
    <br>

![](/assets/blog/win10-vm-user-11.png)

<br>
<br>

13. Click on "Next".
    <br>
    <br>

![](/assets/blog/win10-vm-user-12.png)

<br>
<br>

14. Choose your appropriate region. 
    <br>
    <br>

![](/assets/blog/win10-vm-user-13.png)

<br>
<br>

15. Choose your appropriate keyboard layout.
    <br>
    <br>

![](/assets/blog/win10-vm-user-14.png)

<br>
<br>

16. You can choose a second keyboard layout if you wish, but I decided to skip it.
    <br>
    <br>

![](/assets/blog/win10-vm-user-15.png)

<br>
<br>

17. Fill in the text field for the PC's user or administrator.

<br>
<br>

![](/assets/blog/win10-vm-user-16.png)

<br>
<br>

18. Feel free to fill in the password text field if you'd like. However, I will be creating a password for the administrator account directly within Windows 10, so I chose to skip this step.
    <br>
    <br>

![](/assets/blog/win10-vm-user-17.png)

<br>
<br>

#### Optional step: Renaming your PC for Windows 10/11

<br>

<br>

1. For Windows 10 right-click "This PC" in File-Explorer and click on Properties > Rename this PC(advanced) > Change. Refer to <a href="https://blogbydave.netlify.app/blog/01.%20virtual%20machine%20setup,%20windows%20server%202022%20and%20active%20directory%20installation/#renaming-your-pc-on-windows-server-2022" target="_blank">Renaming your PC</a>.

 <br>
 <br>

   ![](/assets/blog/win11-rename-pc.png)

<br>

<br>

   For Windows 11 click on right-click "This PC" in File-Explorer and click on Properties >  "Domain or Workgroup" > Change.

<br>

<br>

## Enable Administrator account

<br>

<br>

1. In file explorer right-click "This PC" and click "Manage".
   <br>
   <br>

![](/assets/blog/enabling-administrator-account-1.png)

<br>
<br>

2. Go to the "local users and groups" folder and navigate to the "users" folder.

<br>
 <br>

 ![](/assets/blog/enabling-administrator-account-2.png)

 <br>
 <br>

3. Then double-click "administrator" or right-click and click on "properties".

![](/assets/blog/enabling-administrator-account-3.png)

 <br>
   <br>

6. Uncheck "Account is disabled".

<br>
<br>

 ![](/assets/blog/enabling-administrator-account-4.png)

<br>
<br>

![](/assets/blog/enabling-administrator-account-5.png)

<br>
<br>

6. Right-click on the Administrator account and click on "Set Password"
   <br>
   <br>

![](/assets/blog/enabling-administrator-account-7.png)

<br>
<br>

7. Click "Proceed".
   <br>
   <br>

![](/assets/blog/enabling-administrator-account-8.png)

<br>
<br>

8. Set the password for the Administrator then click "Ok".
   <br>
   <br>

![]()

<br>
<br>

### Enabling Administrator account across multiple PCs

<br>
<br>

It is good practice to use a single administrator account for each PC and to have that account apply across multiple PCs. When setting up a new PC or VM, be sure to enable the administrator account.
<br>
<br>

## VMWare Network Adapter Settings

<br>
<br>

Changing the VMWare network adapter settings to "host-only" will allow the PCs created on VMs to connect and communicate with each other using Static IP addresses. The VMs will communicate in a private network rather than using your external network.
<br>
<br>

1. Navigate to the navigation bar on top of VMware and click on Virtual Machine > Network Adapter > Host-only.
   <br>
   <br>

![](/assets/blog/changing-vmware-network-adapter-settings.png)
<br>
<br>

## Creating Static IP Addresses

<br>
<br>

I will create a static IP address for my server, which hosts my domain controller, so that my virtual machines, which host the helpdesk PCs and user accounts, can connect to the domain.
<br>
<br>

1. Click the Start button and search for 'Control Panel'.
   <br>
   <br>

![](/assets/blog/creating-static-ip-addresses-1.png)

<br>
<br>

2. Click "Network and Internet"
   <br>
   <br>

![](/assets/blog/creating-static-ip-addresses-2.png)

<br>
<br>

3. Click "Network and Sharing Center"
   <br>
   <br>

![](/assets/blog/creating-static-ip-addresses-3.png)

<br>
<br>

4. Click "Change adapter settings"
   <br>
   <br>

![](/assets/blog/creating-static-ip-addresses-4.png)

<br>
<br>

5. Click "Ethernet"
   <br>
   <br>

![](/assets/blog/creating-static-ip-addresses-5.png)

<br>
<br>

6. Click "Properties"
   <br>
   <br>

![](/assets/blog/creating-static-ip-addresses-6.png)

<br>
<br>

7. Double-click "Internet Protocol Version 4 (TCP/IPv4)"
   <br>
   <br>

![](/assets/blog/creating-static-ip-addresses-7.png)

<br>
<br>

8. Click 'Use the following IP address:' and assign any IP address of your choice to your PC.

<br>
 <br>

![](/assets/blog/creating-static-ip-addresses-8.png)

### Download Team Viewer

<br>
<br>

I will download TeamViewer, which will allow me to remotely access another user's PC. Although I won't be using TeamViewer immediately, I’m downloading it now because once we set up a static IP for this PC, we will lose access to Wi-Fi. Therefore, I’m downloading everything I need now.

<br>
<br>

1. Go into the web browser of your choice and search for "Team Viewer" then download the application. <a href="https://www.teamviewer.com/en-us/download/free-download-with-license-options/?utm_source=google&utm_medium=cpc&utm_campaign=us%7Cb%7Cpr%7C22%7Caug%7Ctv-core-brand-only-exact-sn%7Cnew%7Ct0%7C0&utm_content=Exact&utm_term=team+viewer" target="_blank">Team Viewer Free Download</a> Chose the free download option.

<br>
<br>

![](/assets/blog/teamviewer-install-1.png)

<br>
<br>

2. Click on the logo of the operating system that you are using. I am using Windows

<br>
<br>

![](/assets/blog/teamviewer-install-2.png)

<br>
<br>


3. Scroll down and download the TeamViewer Host. Select either the 32-bit or 64-bit version. 

<br>
<br>

![](/assets/blog/teamviewer-install-3.png)

<br>
<br>

4. Choose the default installation and click on "Accept".

<br>
<br>

![](/assets/blog/teamviewer-setup-1.png)

<br>
<br>

## Installing RSAT Tools

<br>
<br>

I will use the user account I created in Windows 10 as a helpdesk account. To do this, I will need the functionalities of Server Manager within Windows 10. Therefore, we will install the RSAT tools.

<br>
<br>

#### RSAT Tools on Windows 10

<br>
<br>

1. Click the "Start" button and search for "Add or remove programs"

<br>
<br>

![](/assets/blog/win10-rsat-tools-download-1.png)

<br>
<br>

2. Click "Optional features".

<br>
<br>

![](/assets/blog/win10-rsat-tools-download-2.png)

<br>
<br>

3. Click "Add a feature"

<br>
<br>

![](/assets/blog/win10-rsat-tools-download-3.png)

<br>
<br>

3. Install the RSAT Tools that you need.

<br>
<br>

![](/assets/blog/win10-rsat-tools-download-4.png)

<br>
<br>

4. You can see the tools that I installed here.

<br>
<br>

![](/assets/blog/win10-rsat-tools-download-5.png)

#### RSAT Tools on Windows 11

<br>
<br>

1. Click the "Start" button and search for "optional features" which is located in the "System" settings.
   <br>
   <br>

![](/assets/blog/win11-rsat-download-1.png)

<br>
<br>

2. Click "Add a feature"
   <br>
   <br>

![](/assets/blog/win11-rsat-download-2.png)

<br>
<br>

3. Install RSAT Tools such as "RSAT Active Directory Certificate Service Tools."
   <br>
   <br>

![](/assets/blog/win11-rsat-download-3.png)

<br>
<br>

## Creating a static IP Address for the helpdesk and User PC

<br>
<br>

The PC must have the correct IP address to connect to the domain. Enter the IP address of your Domain Name Server in the 'Preferred DNS Server' field. For instructions on accessing the 'Internet Protocol Version 4 (TCP/IPv4) Properties,' refer to <a href="https://blogbydave.netlify.app/blog/2025-01-23-enable-administrator-account-vmware-network-adapter-settings-creating-static-ip-address-deleting-user-accounts-without-server-manager-installing-rsat-tools/#creating-static-ip-addresses" target="_blank">Creating Static IP Addresses</a>.

<br>
<br>

#### Static IP Address for helpdesk PC

<br>

![](/assets/blog/static-ip-desktop-1.png)

<br>

<br>

#### Static IP Address for User PC

<br>

<br>

![](/assets/blog/static-ip-desktop-2.png)

<br>
<br>

## Join PC to a Domain

<br>
<br>

1. Open file explorer and right click on "This PC" and click on "Properties" 
   <br>
   <br>

![](/assets/blog/winserver2022-setup-01-edit.png)

<br>
<br>

2. Click on "Rename this PC(advanced)" and click on the "Change" button  for Windows 10 or
     "Domain or Workgroup" for Windows 11.

<br>
<br>

#### Windows 10

<br>
<br>

![](/assets/blog/winserver2022-setup-02-edited.png)

<br>
<br>

![](/assets/blog/winserver2022-setup-03-edited.png)

<br>
<br>

#### Windows 11

<br>

![](/assets/blog/win11-change-domain-or-workgroup-1.png)

<br>

![](/assets/blog/win11-change-domain-or-workgroup-2.png)

<br>
<br>

3. Click on "Domain" under "Member of" and type in the domain you want to connect too.

<br>
<br>

![](/assets/blog/connecting-desktop-1-to-dns.png)

<br>
<br>

4. Put in your information for your administrator account to confirm the connection with the domain.
   <br>
   <br>

![](/assets/blog/dns-connect-information.png)

<br>
<br>

5. Go to Active Directory Users and Computers to confirm that the PC is connected to the domain. Check in the "Computers" directory. 
   <br>
   <br>

![](/assets/blog/desktop1-desktop2-is-connected-to-the-domain..png)

<br>
<br>

#### Pinging our Domain Name Server

<br>
<br>

1. On your Windows 10/11 PC that you connected to your DNS open the Command Prompt and type in the command \\\`\\\\\\`ping \\\\[IP of your DNS]\\\`\\\\\\`
   For example: the IP of my DNS is "10.1.10.2" so I would type \\\`\\\\\\`ping 10.1.10.2\\\`\\\\\\`

<br>
<br>

![](/assets/blog/pinging-dns-with-win11-pc.png)

<br>
<br>

## How to delete a user without Server Manager

<br>
<br>

1. Open File Explore and right click on "This PC" and click on "Properties".

<br>
<br>

![](/assets/blog/winserver2022-setup-01-edit.png)

<br>
<br>

2. Click on "Advanced System Settings"

<br>
<br>

![](/assets/blog/winserver2022-setup-05-edit.png)

<br>
<br>

3. Click on "Settings" under "User Profiles"

<br>
<br>

![](/assets/blog/delete-user-without-server-manager-1.png)

<br>
<br>

4. Find the user you want to delete, click on them and press the delete button.

<br>
<br>

![](/assets/blog/delete-user-without-server-manager-2.png)

<br>
<br>

5. Confirm that you want to delete the profile

<br>
<br>

![](/assets/blog/delete-user-without-server-manager-3.png)

<br>
<br>

## Summary

<br>
<br>

In this lab, I installed Windows 10 and Windows 11 on two separate virtual machines and assigned static IP addresses to both. This allowed me to join the PCs to the domain by accessing the "Computer Name/Domain Changes" settings in the System Properties. I also enabled the administrator account on both PCs within Windows 10 and 11. Additionally, I set up my Helpdesk PC environment by installing RSAT tools, enabling me to use features like Active Directory Users and Computers.
