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

![](/assets/blog/dns-server-setup-1.png)

<br>
<br>

2. Toggle 'Add a new forest' because this is a new environment setup, meaning we don't have any existing domains or forests.

<br>
<br>

   ![](/assets/blog/dns-server-setup-2.png)
<br>
<br>

3. Fill in the 'Root domain name' text field. Since I will be hosting my domain on a static IP, I can choose any name I like. If your domain is hosted on the internet, you may need to change the name if it is already taken by someone else.

<br>
<br>

   ![](/assets/blog/dns-server-setup-3.png)
<br>
<br>

4. Leave all settings as they are in the Domain Controller Options, then create a password.

<br>
<br>

   ![](/assets/blog/dns-server-setup-4.png)

<br>
<br>

5. Click "Next".

   ![](/assets/blog/dns-server-setup-5.png)

<br>
<br>

6. Verify that the NetBIOS domain name is correct.

   ![](/assets/blog/dns-server-setup-6.png)

<br>
<br>

7. Click "Next".

<br>
   <br>

   ![](/assets/blog/dns-server-setup-7.png)
<br>
<br>

8. Click "Next".
   <br>
   <br>

   ![](/assets/blog/dns-server-setup-8.png)

<br>
<br>

9. We will encounter several error messages, but since we are setting up a basic DNS server environment on a static IP address, we don't need to worry about them. Simply click 'Next'.

<br>
<br>

   ![](/assets/blog/dns-server-setup-9.png)

<br>
<br>

10. Your PC will restart automatically and begin applying computer settings. This process may take some time.

<br>
    <br>

11. After your computer has finished restarting, go to 'Other User' and check if 'Sign in to: (Your Domain Name)' is displayed. If it is, that means your domain is up and running. It also indicates that the user you create will be part of your domain.

<br>
    <br>

![](/assets/blog/dns-button.png)

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

   ![](/assets/blog/ad-find-user-1.png)

<br>
<br>

2. Right-click your domain name and click 'find'. My domain name is 'davesworld.com'

 <br>
<br>

   ![](/assets/blog/ad-find-user-2.png)

<br>
<br>

3. Click on the directory navigation and select 'Entire Directory.' It is best practice to search the 'Entire Directory' as it will search everything. Since the user may not be in the domain or a specific directory, it is important to perform a search across the entire directory.

<br>
   <br>

![](/assets/blog/ad-find-user-3.png)

 <br>
 <br>

4. Fill in the 'Name:' text field, search for the desired user, and click the 'Find Now' button.

<br>
   <br>

![](/assets/blog/ad-find-user-4.png)

 <br>
 <br>

5. You should see the user show up after the previous step.

<br>
 <br>

   ![](/assets/blog/ad-find-user-5.png)

<br>
<br>

6. Click 'View' in the navigation bar within Active Directory Users and Computers, then select 'Advanced Features.' This will provide additional information about users whenever you search for them. By repeating these steps to find a user within Active Directory, you can see which directory they belong to.

<br>
<br>

   ![](/assets/blog/ad-find-user-6.png)

<br>
<br>

7. Repeat the steps to find a user within the Active Directory, and then double-click the user.

 <br>
   <br>

![](/assets/blog/ad-find-user-7.png)

<br>
<br>

8. Click "Object" in the Properties settings.

<br>
   <br>

![](/assets/blog/ad-find-user-8.png)

<br>
<br>

9. This shows which directory the user belongs to. In my case, the user 'Guest' belongs to the 'Users' directory.

<br>
<br>

![](/assets/blog/ad-find-user-9.png)

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

Enabling recycle bin is useful because if you delete something by accident you can retrieve.
<br>
<br>

#### Steps to enable recycle bin

<br>
<br>

1. Go to the Windows Start button and search for "windows administrative tools" then look for "Active Directory Administrative Center"
   <br>
   <br>

   ![](/assets/blog/ad-enable-recycle-bin-1.png)

<br>
<br>

2. Click on your local domain name
   <br>
   <br>

![](/assets/blog/ad-enable-recycle-bin-2.png)

<br>
<br>

3. Enable Recycle bin (located to the right sidebar).
      <br>
      <br>

      ![](/assets/blog/ad-enable-recycle-bin-3.png)
   <br>
   <br>
4. Click "ok".
   <br>
   <br>

![](/assets/blog/ad-enable-recycle-bin-4.png)

<br>
<br>
5. Click the refresh icon in the navigation bar.
<br>
<br>

![](/assets/blog/ad-enable-recycle-bin-5.png)

<br>
<br>
6. You should see a folder called "Deleted Objects". This is your recycle bin.
<br>
<br>

![](/assets/blog/ad-enable-recycle-bin-6.png)
<br>
<br>

## Account Creation

<br>
<br>

It is best practice to have a user with roles that you can copy from instead of creating a user and manually assigning them roles and permissions. Doing this is scalable and saves a bunch of time, especially if you have to make many user accounts.

<br>
<br>

#### Steps to create a user account from an existing user

<br>
<br>

1. Right-click on an established user and copy it
   <br>
   <br>

   ![](/assets/blog/account-creation-copy-1.png)

<br>
<br>

2. Then fill out the required text fields such as name and password

<br>
<br>

![](/assets/blog/account-creation-copy-2.png)

<br>
<br>

3. The permissions and the active directory they are already set to the user that you copied from.

<br>
<br>

![](/assets/blog/account-creation-copy-3.png)

<br>
<br>

4. Click "Finish".
   <br>
   <br>

![](/assets/blog/account-creation-copy-4.png)

<br>
<br>

5. You should see the user you created inside the directory that you created it in.
   <br>
   <br>

![](/assets/blog/account-creation-copy-5.png)

<br>
<br>

6. You can right-click on the created user and click "Properties" to see the directories that they are in. Since the user was created by copying an existing user, they should be apart of the same directory as that person. In my case the user "helpdesk" should be apart of everything that the "Administrator" is apart of.
   <br>
   <br>

![](/assets/blog/account-creation-copy-6.png)

<br>
<br>

7. Click "Member Of"
   <br>
   <br>

![](/assets/blog/account-creation-copy-7.png)

<br>
<br>

8. Here you can what directories the user is apart of. I did a side by side comparison to show that the user that I created from copying the "Administrator" user is identical.
   <br>
   <br>

![](/assets/blog/account-creation-copy-8.png)

<br>
<br>

#### Steps to create a new user account scratch

<br>
<br>

1. Right-click on the directory you want to create the user in and click "New".

<br>
<br>

![](/assets/blog/account-creation-new-1.png)

<br>
<br>

2. Fill in the information for the user.
   <br>
   <br>

![](/assets/blog/account-creation-new-2.png)

<br>
<br>

3. Create a password for the user and give them the permissions that you want them to have
   <br>
   <br>

![](/assets/blog/account-creation-new-3.png)

<br>
<br>

4. If you go to the properties of the newly created user, you will see that they are not apart of any directories. You will have to assign the directories you want them to be apart of one by one.
   <br>
   <br>

![](/assets/blog/account-creation-new-4.png)

<br>
<br>

## CMD Commands

<br>
<br>

1. `ipconfig` 
   <br>
   <br>

   ![](/assets/blog/cmd-1-ipconfig.png)

<br>
<br>

   `ipconfig` command gives you the ip address of the computer you are using

<br>
   <br>

2. `ipconfig/all`
   <br>
   <br>

   ![](/assets/blog/cmd-2-ipconfig-all.png)

 <br>
<br>

   `ipconfig/all` command gives you all the ip addresses in the network.

<br>
<br>

 If you see `DCHP Enabled. . .  Yes`  that means computer is grabbing an ip address from Dynamic Configuration Host Protocol. 
 If you see `DCHP Enabled. . .  No` then your computer is using a static ip address.

<br>
<br>

What are some real world use cases for static ips?

<br>
<br>

Answer: A real world use cases for static ips would be assigning a printer a static ip in a work place. Since the ip address might change in a work place it is good to have a static ip on a printer. If the ip address on a printer changes you cannot print to that printer anymore. For this reason it is good practice to give the printer a static ip address so you can print to it indefinitely.

<br>
<br>

3. `net use` 

<br>
<br>

   This command will tell you the shared drives that a person is connected too.

<br>
<br>

4. `net user (user domain name) /domain`

<br>
<br>

   ![](/assets/blog/cmd-3-net-user-domain-name-domain.png)

 <br>
<br>

This cmd command shows you information about the user domain that you enter. For example what time their password expires, what group they are apart of etc.

<br>
<br>

#### Sidenote

<br>
<br>

When putting in commands in a terminal the `?` mark is there to help you. If you don't know the properties/extension of a command put a `?` on it.

<br>
<br>

## Summary

<br>
<br>

In this lab, I installed Active Directory Domain Services and explored how to locate users within a domain using Active Directory Users and Computers. I also learned how to enable the Recycle Bin in Windows Server 2022 and how to create user accounts using two methods. The first method, the copy method, involves using an existing user as a template. For example, I copied my admin account to create a helpdesk account. I then reviewed how to create a new user from scratch. Lastly, I explored some useful command-line tools, such as `ipconfig`, `net user (user domain name) /domain`, and others.
