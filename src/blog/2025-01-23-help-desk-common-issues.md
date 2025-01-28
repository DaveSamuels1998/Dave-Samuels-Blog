---
title: Help Desk Common Issues
description: Fifth Lab Series
author: Dave Samuels
date: 2025-01-21T21:30:00.000Z
tags:
  - post
  - featured
image: /assets/blog/article-4.jpg
imageAlt: Fifth Installment
---
## Introduction

<br>

<br>

In this blog, I will explore the reasons behind creating the two accounts: the Helpdesk account and the user account. I will cover topics such as how to unlock an account, change a user's password, reset an account, and what it means when a computer falls off the domain, among others.

<br>

<br>

### CMD Commands for working with a user

<br>

<br>

1. First, check if you can ping any device. I pinged my server using the domain name (davesworld.com) and the IP address 10.1.10.2 with the ping command. It's important to know the IP address of the device you want to ping, as multiple companies can share the same domain name, but each will have a unique IP address.

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/cmd-working-with-user-1.png){.myImg}

</button>

</div>

<br>

<br>

2. To perform a continuous ping, use the command `ping -t`. For example, `ping 10.1.10.2 -t`. This is useful when working with a PC that needs to be restarted. The ping will continue while the PC is on, and if the PC restarts, the command prompt will display a "timeout" message. Once the PC is back online, the ping will resume. To stop the continuous ping, press `Ctrl + C`.

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/cmd-working-with-user-2.png){.myImg}

</button>

</div>

<br>

<br>

## Help Desk Common Issues

<br>

<br>

### Locked out of an account

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/account-lockout-1.png){.myImg}

</button>

</div>

<br>

<br>

#### Solution

<br>

<br>

1. Open Server Manager and go into Active Directory Users and Computers

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/ad-find-user-1.png){.myImg}

</button>

</div>

<br>

<br>

2. Navigate to the domain controller, right-click on it, and select "Find."

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/ad-find-user-2.png){.myImg}

</button>

</div>

<br>

<br>

3. Enter the user's name in the "Users" text field, then search the "Entire Directory."

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-1.png){.myImg}

</button>

</div>

<br>

<br>

4. Double-click on their name in the search results.

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-2.png){.myImg}

</button>

</div>

<br>

<br>

5. Click on the "Account" tab.

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/account-lockout-2.png){.myImg}

</button>

</div>

<br>

<br>

6. Click "Unlock Account," then select "Apply" and "OK."

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/account-lockout-3.png){.myImg}

</button>

</div>

<br>

<br>

### Account is disabled

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/account-disabled-1.png){.myImg}

</button>

</div>

<br>

<br>

#### Solution

<br>

<br>

1. Open Server Manager and go into Active Directory Users and Computers

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/ad-find-user-1.png){.myImg}

</button>

</div>

<br>

<br>

2.  Navigate to the domain controller, right-click on it, and select "Find."

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/ad-find-user-2.png){.myImg}

</button>

</div>

<br>

<br>

3. Enter the user's name in the "Users" text field, then search in the "Entire Directory."

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-1.png){.myImg}

</button>

</div>

<br>

<br>

4. Right-click their name in the search results and select "Enable Account."

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/enable-account-1.png){.myImg}

</button>

</div>

<br>

<br>

### User needs their password to be reset

<br>

<br>

#### Solution

<br>

<br>

1. Open Server Manager and go into Active Directory Users and Computers

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/ad-find-user-1.png){.myImg}

</button>

</div>

<br>

<br>

2. Navigate to the domain controller then right-click on it and click on "Find"

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/ad-find-user-2.png){.myImg}

</button>

</div>

<br>

<br>

3. Enter the user's name in the "Users" text field, then search in the "Entire Directory."

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-1.png){.myImg}

</button>

</div>

<br>

<br>

4. Right-click their name in the search results and select "Reset Password."

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/reset-password-1.png){.myImg}

</button>

</div>

<br>

<br>

5. Assign a new password to the user. If the "User must change password at next logon" option is selected, inform the user that they will need to change their password upon their next login.

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/reset-password-2.png){.myImg}

</button>

</div>

<br>

<br>

### User account is expired

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/account-expired-1.png){.myImg}

</button>

</div>

<br>

<br>

A user may encounter this issue if their password has expired, requiring you to extend their account in Active Directory.

<br>

<br>

#### Solution

<br>

<br>

1. Open Server Manager and go into Active Directory Users and Computers

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/ad-find-user-1.png){.myImg}

</button>

</div>

<br>

<br>

2. Navigate to the domain controller then right-click on it and click on "Find"

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/ad-find-user-2.png){.myImg}

</button>

</div>

<br>

<br>

3. Enter the user's name in the "Users" text field, then search in the "Entire Directory."

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-1.png){.myImg}

</button>

</div>

<br>

<br>

4. Double-click on their name in the search results.

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-2.png){.myImg}

</button>

</div>

<br>

<br>

5. Click on the "Account" tab.

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/account-lockout-2.png){.myImg}

</button>

</div>

<br>

<br>

6. Click on "Never" under "Account expires".

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/account-expired-2.png){.myImg}

</button>

</div>

<br>

<br>

7. Optional step: Verify the user's information in the Command Prompt by using the command `net user [domain name] /domain`.

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/cmd-net-user-maddy.png){.myImg}

</button>

</div>

<br>

<br>

### PC that is connected to the domain is disabled

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/pc-disabled-on-ad-1.png){.myImg}

</button>

</div>

<br>

<br>

#### Solution

<br>

<br>

1. Open Server Manager and go into Active Directory Users and Computers

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/ad-find-user-1.png){.myImg}

</button>

</div>

<br>

<br>

2. Navigate to the "Computer" OU and locate the disabled PC account. If you see an arrow pointing down, it indicates that the account is disabled. In my case, Desktop2 is the disabled computer.

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/enable-pc-on-ad-1.png){.myImg}

</button>

</div>

<br>

<br>

3. Right-click on the disabled PC account and click on "Enable Account".

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/enable-pc-on-ad-2.png){.myImg}

</button>

</div>

<br>

<br>

### PC has fallen off of the domain

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/pc-disabled-on-ad-1.png){.myImg}

</button>

</div>

<br>

<br>

#### Solution

<br>

<br>

You need to rejoin the PC to the domain.

<br>

<br>

1. Log in with your local account by typing ".\administrator." If you click "How do I sign in to another domain?" you will see additional options.
<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/adding-back-to-the-domain-1.png){.myImg}

</button>

</div>

<br>

<br>

2. Open File Explorer, right-click on "This PC," and then select "Properties."

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/winserver2022-setup-01-edit.png){.myImg}

</button>

</div>

<br>

<br>

3. Click "Rename this PC (advanced)"

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/winserver2022-setup-02-edited.png){.myImg}

</button>

</div>

<br>

<br>

4. Click "Change".

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/winserver2022-setup-03-edited.png){.myImg}

</button>

</div>

<br>

<br>

5. Click the "Workgroup: " button and fill in the text field.

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/adding-back-to-the-domain-2.png){.myImg}

</button>

</div>

<br>

<br>

6. Click "OK".

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/adding-back-to-the-domain-3.png){.myImg}

</button>

</div>

<br>

<br>

7. Click "Ok".

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/adding-back-to-the-domain-4.png){.myImg}

</button>

</div>

<br>

<br>

8. You will need the account information of the user who has permission to change the domain name or add a PC to a workgroup.

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/adding-back-to-the-domain-5.png){.myImg}

</button>

</div>

<br>

<br>

9. You will be prompted to restart your PC. Once the restart is complete, return to the "Computer Name/Domain Changes" settings. Then, right-click "This PC" in File Explorer, select Properties, click on "Rename this PC (advanced)," and then choose "Change."

<br>

<br>

10. To add the PC back to the domain, click the "Domain:" button and enter your domain name in the text field.
<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/adding-back-to-the-domain-6.png){.myImg}

</button>

</div>

<br>

<br>

11. You will follow the same process as before with the workgroup. Enter the information for the user who has permission to change the domain name, and once the process is complete, you will be prompted to restart your PC.

<br>

<br>

12. If you check inside the Computers OU, you should see the PC there.

<br>

<br>

<div>

<button class="updateDetails">

![](/assets/blog/desktop1-desktop2-is-connected-to-the-domain..png){.myImg}

</button>

</div>

<br>

<br>

## Summary

<br>

<br>

In this lab, I discussed common Help Desk issues, such as account lockouts, disabled accounts, and PCs falling off the domain. I demonstrated how these issues appear from the user's perspective and provided solutions for each problem. Additionally, I showcased useful CMD commands for working with user accounts, including the \`ping\` command to check if requests can successfully reach their PC.
