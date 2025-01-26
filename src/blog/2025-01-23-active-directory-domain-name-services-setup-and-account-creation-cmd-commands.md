---
title: Active Directory Domain Name Services Setup and Account Creation, CMD Commands
description: Second Lab Series
author: Dave Samuels
date: 2025-01-15T19:50:00.000Z
tags:
  - post
image: /assets/blog/article-1.jpg
imageAlt: Second Installment
---
## Introduction

<br>
<br>

In this lab, I will complete the post-deployment configuration for Active Directory by installing and setting up Active Directory Domain Services. Once this process is finished, I will be able to create and locate users within Active Directory.

<br>
<br>

### Deployment Configuration

<br>
<br>

1. Click "Promote this server to a domain controller"

<br>
<br>

<div class="myImg">

![](/assets/blog/dns-server-setup-1.png)

<br>
<br>

</div>

2. Toggle 'Add a new forest' because this is a new environment setup, meaning we don't have any existing domains or forests.

<br>
<br>

<div class="myImg">

   ![](/assets/blog/dns-server-setup-2.png)
<br>
<br>

</div>

3. Fill in the 'Root domain name' text field. Since I will be hosting my domain on a static IP, I can choose any name I like. If your domain is hosted on the internet, you may need to change the name if it is already taken by someone else.

<br>
<br>

<div class="myImg">

   ![](/assets/blog/dns-server-setup-3.png)

</div>

<br>
<br>

4. Leave all settings as they are in the Domain Controller Options, then create a password.

<br>
<br>

<div class="myImg">

   ![](/assets/blog/dns-server-setup-4.png)

</div>

<br>
<br>

5. Click "Next".

<div class="myImg">

   ![](/assets/blog/dns-server-setup-5.png)

</div>

<br>
<br>

6. Verify that the NetBIOS domain name is correct.

<div class="myImg">

   ![](/assets/blog/dns-server-setup-6.png)

</div>

<br>
<br>

7. Click "Next".

<br>
 <br>

   <div class="myImg">

![](/assets/blog/dns-server-setup-7.png)

</div>

<br>
<br>

8. Click "Next".
   <br>
   <br>

   <div class="myImg">

![](/assets/blog/dns-server-setup-8.png)

</div>

<br>
<br>

9. We will encounter several error messages, but since we are setting up a basic DNS server environment on a static IP address, we don't need to worry about them. Simply click 'Next'.

<br>
<br>

<div class="myImg">

   ![](/assets/blog/dns-server-setup-9.png)

</div>

<br>
<br>

10. Your PC will restart automatically and begin applying computer settings. This process may take some time.

<br>
<br>

11. After your computer has finished restarting, go to 'Other User' and check if 'Sign in to: (Your Domain Name)' is displayed. If it is, that means your domain is up and running. It also indicates that the user you create will be part of your domain.

<br>
    <br>

<div class="myImg">

![](/assets/blog/dns-button.png)

</div>

<br>
<br>

With Server Manager, we can containerize and manage user computers and Organizational Units (OUs) using Active Directory Users and Computers. In this post, I will explore more of the features within Active Directory.

<br>
<br>

### Finding a user in an active directory

<br>
<br>

1. In Server Manger, navigate to Tools > Active Directory Users and Computers
   <br>
    <br>

<div class="myImg">

   ![](/assets/blog/ad-find-user-1.png)

</div>

<br>
<br>

2. Right-click your domain name and click 'find'. My domain name is 'davesworld.com'

 <br>
<br>

<div class="myImg">

   ![](/assets/blog/ad-find-user-2.png)

</div>

<br>
<br>

3. Click on the directory navigation and select 'Entire Directory.' It is best practice to search the 'Entire Directory' as it will search everything. Since the user may not be in the domain or a specific directory, it is important to perform a search across the entire directory.

<br>
   <br>

<div class="myImg">

![](/assets/blog/ad-find-user-3.png)

</div>

 <br>
 <br>

4. Fill in the 'Name:' text field, search for the desired user, and click the 'Find Now' button.

<br>
   <br>

<div class="myImg">

![](/assets/blog/ad-find-user-4.png)

</div>

 <br>
 <br>

5. You should see the user show up after the previous step.

<br>
 <br>

<div class="myImg">

   ![](/assets/blog/ad-find-user-5.png)

</div>

<br>
<br>

6. Click 'View' in the navigation bar within Active Directory Users and Computers, then select 'Advanced Features.' This will provide additional information about users whenever you search for them. By repeating these steps to find a user within Active Directory, you can see which directory they belong to.

<br>
<br>

<div class="myImg">

   ![](/assets/blog/ad-find-user-6.png)

</div>

<br>
<br>

7. Repeat the steps to find a user within the Active Directory, and then double-click the user.

 <br>
   <br>

<div class="myImg">

![](/assets/blog/ad-find-user-7.png)

</div>

<br>
<br>

8. Click "Object" in the Properties settings.

<br>
   <br>

<div class="myImg">

![](/assets/blog/ad-find-user-8.png)

</div>

<br>
<br>

9. This shows which directory the user belongs to. In my case, the user 'Guest' belongs to the 'Users' directory.

<br>
<br>

<div class="myImg">

![](/assets/blog/ad-find-user-9.png)

</div>

<br>
<br>

#### Sidenote

<br>
<br>

When searching for something within your domain, right-click the domain directory and select 'Find.' In the example below, we right-clicked the 'Computer' directory to demonstrate that you may not find what you're looking for if you search within the 'Computer' directory.

<br>
<br>

## Enable Recycle Bin

<br>
<br>

Enabling the recycle bin is useful because it allows you to retrieve items if you accidentally delete them.
<br>
<br>

#### Steps to enable recycle bin

<br>
<br>

1. Click the Windows Start button, search for 'Windows Administrative Tools,' and then select 'Active Directory Administrative Center.'
   <br>
   <br>

<div class="myImg">

   ![](/assets/blog/ad-enable-recycle-bin-1.png)

</div>

<br>
<br>

2. Click on your local domain name
   <br>
   <br>

<div class="myImg">

![](/assets/blog/ad-enable-recycle-bin-2.png)

</div>

<br>
<br>

3. Enable the Recycle bin (located on the right sidebar).
      <br>
      <br>

<div class="myImg">

  ![](/assets/blog/ad-enable-recycle-bin-3.png)

</div>

   <br>
   <br>

4. Click "ok".
   
<br>
   <br>

<div class="myImg">

![](/assets/blog/ad-enable-recycle-bin-4.png)

</div>

<br>
<br>

5. Click the refresh icon in the navigation bar.
<br>
<br>

<div class="myImg">

![](/assets/blog/ad-enable-recycle-bin-5.png)

</div>

<br>
<br>

6. You should see a folder called "Deleted Objects". This is your recycle bin.

<br>
<br>

<div class="myImg">

![](/assets/blog/ad-enable-recycle-bin-6.png)

</div>

<br>
<br>

## Account Creation

<br>
<br>

It is best practice to create a user with roles that can be copied, rather than manually assigning roles and permissions to each new user. This approach is scalable and saves time, especially when creating multiple user accounts.

<br>
<br>

#### Steps to create a user account from an existing user

<br>
<br>

1. Right-click on an established user and copy it
   <br>
   <br>

<div class="myImg">

   ![](/assets/blog/account-creation-copy-1.png)

</div>

<br>
<br>

2. Then fill out the required text fields such as name and password

<br>
<br>

<div class="myImg">

![](/assets/blog/account-creation-copy-2.png)

</div>

<br>
<br>

3. The permissions and Active Directory settings are already configured for the user you copied from.

<br>
<br>

<div class="myImg">

![](/assets/blog/account-creation-copy-3.png)

</div>

<br>
<br>

4. Click "Finish".
   <br>
   <br>

<div class="myImg">

![](/assets/blog/account-creation-copy-4.png)

</div>

<br>
<br>

5. You should see the user you created in the directory where you created it.
   
<br>
   <br>

<div class="myImg">

![](/assets/blog/account-creation-copy-5.png)

</div>

<br>
<br>

6. Right-click the created user and select 'Properties' to view the directories they belong to. Since the user was created by copying an existing one, they should be part of the same directories as the original user. In my case, the 'helpdesk' user should be part of the same directories as the 'Administrator'.
   <br>
   <br>

<div class="myImg">

![](/assets/blog/account-creation-copy-6.png)

</div>

<br>
<br>

7. Click "Member Of"
   <br>
   <br>

<div class="myImg">

![](/assets/blog/account-creation-copy-7.png)

</div>

<br>
<br>

8. Here, you can see which directories the user is a part of. I did a side-by-side comparison to show that the user I created by copying the 'Administrator' user is identical.
   <br>
   <br>

<div class="myImg">

![](/assets/blog/account-creation-copy-8.png)

</div>

<br>
<br>

#### Steps to create a new user account scratch

<br>
<br>

1. Right-click on the directory you want to create the user in and click "New".

<br>
<br>

<div class="myImg">

![](/assets/blog/account-creation-new-1.png)

</div>

<br>
<br>

2. Fill in the information for the user.
   <br>
   <br>

<div class="myImg">

![](/assets/blog/account-creation-new-2.png)

</div>

<br>
<br>

3. Create a password for the user and give them the permissions that you want them to have.
   <br>
   <br>

<div class="myImg">

![](/assets/blog/account-creation-new-3.png)

</div>

<br>
<br>

4. When you view the properties of the newly created user, you will notice that they are not part of any directories. You will need to assign them to the desired directories individually.
   <br>
   <br>

<div class="myImg">

![](/assets/blog/account-creation-new-4.png)

</div>

<br>
<br>

## CMD Commands

<br>
<br>

1. `ipconfig` 
   <br>
   <br>

<div class="myImg">

   ![](/assets/blog/cmd-1-ipconfig.png)

</div>

<br>
<br>

   The `ipconfig` command provides the IP address of the computer you are using.

<br>
   <br>

2. `ipconfig/all`
   <br>
   <br>

<div class="myImg">

   ![](/assets/blog/cmd-2-ipconfig-all.png)

</div>

 <br>
<br>

   `ipconfig/all` command provides all the IP addresses in the network.

<br>
<br>

If you see `DHCP Enabled: Yes`,  it means the computer is obtaining an IP address from the Dynamic Host Configuration Protocol. If you see 'DHCP Enabled: No,' the computer is using a static IP address.

<br>
<br>

### What are some real-world use cases for static IPs?

<br>
<br>

Answer: A real-world use case for static IPs would be assigning a printer a static IP in a workplace. Since IP addresses can change in a workplace, it’s beneficial to assign a static IP to the printer. If the printer's IP address changes, you won’t be able to print to it. For this reason, it’s good practice to assign a static IP address to the printer, ensuring uninterrupted printing.

<br>
<br>

3. `net use` 

<br>
<br>

   This command will tell you the shared drives that a person is connected to.

<br>
<br>

4. `net user (user domain name) /domain`

<br>
<br>

<div class="myImg">

   ![](/assets/blog/cmd-3-net-user-domain-name-domain.png)

</div>

 <br>
<br>

This cmd command shows you information about the user domain that you enter. For example what time their password expires, what group they are a part of etc.

<br>
<br>

#### Sidenote

<br>
<br>

When entering commands in a terminal, the question mark (?) is there to assist you. If you're unsure of the properties or extension of a command, add a question mark to it.

<br>
<br>

## Summary

<br>
<br>

In this lab, I installed Active Directory Domain Services and explored how to locate users within a domain using Active Directory Users and Computers. I also learned how to enable the Recycle Bin in Windows Server 2022 and how to create user accounts using two methods. The first method, the copy method, involves using an existing user as a template. For example, I copied my admin account to create a helpdesk account. I then reviewed how to create a new user from scratch. Lastly, I explored some useful command-line tools, such as `ipconfig`, `net user (user domain name) /domain`, and others.
