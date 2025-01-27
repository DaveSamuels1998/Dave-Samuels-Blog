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

In this blog I want to explore more on why we made the two accounts, the Helpdesk account and the user account. With both of these accounts I will be going over how to unlock an account, how to change your password, how to reset an account, what it means when a computer falls of the domain etc.

<br>

<br>

### CMD Commands for working with a user

<br>

<br>

1. First you should see if you can ping anything. I pinged my server with the domain name (davesworld.com) with the IP address of 10.1.10.2 using the \`\`ping\`\` command. It is important to know the IP address of whatever you want to ping. Multiple companies can have the same domain name but not the same IP address.

<br>


<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/cmd-working-with-user-1.png){.myImg}

</button>

  

</div>

<br>

<br>

2. If you want a continuous ping the use the command \`\`ping -t\`\` . For example \`\`ping 10.1.10.2 -t\`\` . The continuous ping is useful whenever you are working with a PC and you have to restart the computer. You will get a continuous ping when the PC is on and when it is restarted, the command prompt will say timeout on it, then start the continuous ping when the PC is back up and running. Control^ C stops the continuous ping.

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

2. Navigate to the domain controller then right click on it and click on "Find"

<br>


<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/ad-find-user-2.png){.myImg}

</button>

  

</div>

<br>

<br>

3. Input the users name in the "Users" text field then search "Entire Directory"

<br>


<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-1.png){.myImg}

</button>

  

</div>

<br>

<br>

4. Double click on their name in the search results.

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

6. Click on "Unlock Account" then click on "Apply" and "Ok".

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

2. Navigate to the domain controller then right click on it and click on "Find"

<br>


<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/ad-find-user-2.png){.myImg}

</button>

  

</div>

<br>

<br>

3. Input the users name in the "Users" text field then search "Entire Directory"

<br>


<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-1.png){.myImg}

</button>

  

</div>

<br>

<br>

4. Right-click on their name in the search results and click on "Enable Account".

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

2. Navigate to the domain controller then right click on it and click on "Find"

<br>


<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/ad-find-user-2.png){.myImg}

</button>

  

</div>

<br>

<br>

3. Input the users name in the "Users" text field then search "Entire Directory"

<br>


<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-1.png){.myImg}

</button>

  

</div>

<br>

<br>

4. Right-click on their name in the search results and click on "Reset Password".

<br>


<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/reset-password-1.png){.myImg}

</button>

  

</div>

<br>

<br>

5. Give the user a new password. If you have "User must change password at next logon" checked, you should let the user be aware that they have to change their password.

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

A user might come across this issue because their password is expired and you have to extend their account on Active Directory.

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

2. Navigate to the domain controller then right click on it and click on "Find"

<br>


<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/ad-find-user-2.png){.myImg}

</button>

  

</div>

<br>

<br>

3. Input the users name in the "Users" text field then search "Entire Directory"

<br>


<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-1.png){.myImg}

</button>

  

</div>

<br>

<br>

4. Double click on their name in the search results.

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

7. Optional step: Check if the users information is alright in CMD with `net user [domain name] /domain`

<br>


<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/cmd-net-user-maddy.png){.myImg}

</button>

  

</div>

<br>

<br>

### PC that is connected to the domain is disable

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

2. Navigate to "Computer" OU then look for the PC account that is disabled. If you see an arrow pointing down, that means that the account is disabled. In my cause Desktop2 is the computer that is disabled.

<br>


<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/enable-pc-on-ad-1.png){.myImg}

</button>

  

</div>

<br>

<br>

3. Right click on the disabled PC account and click on "Enable Account".

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

You have to rejoin the PC back into the domain.

<br>

<br>

1. Login in with your local account by typing in ".\administrator". If you click "How do I sign inn to another domain." you can see other options.

<br>

<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/adding-back-to-the-domain-1.png){.myImg}

</button>

  

</div>

<br>

<br>

2. Go into File Explorer and right click on "This PC" and then click on "Properties"

<br>

<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/winserver2022-setup-01-edit.png){.myImg}

</button>

  

</div>

<br>

<br>

3. Click on "Rename this PC (advanced)"

<br>

<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/winserver2022-setup-02-edited.png){.myImg}

</button>

  

</div>

<br>

<br>

4. Click on "Change".

<br>


<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/winserver2022-setup-03-edited.png){.myImg}

</button>

  

</div>

<br>

<br>

5. Click the "Workgroup: " button and fill in the textfield.

<br>


<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/adding-back-to-the-domain-2.png){.myImg}

</button>

  

</div>

<br>

<br>

6. Click on "OK".

<br>


<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/adding-back-to-the-domain-3.png){.myImg}

</button>

  

</div>

<br>

<br>

7. Click on "Ok".

<br>


<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/adding-back-to-the-domain-4.png){.myImg}

</button>

  

</div>

<br>

<br>

8. You will need to know the account information of the user that has permission to change the Domain name or add a PC to a workgroup.


<br>

<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/adding-back-to-the-domain-5.png){.myImg}

</button>

  

</div>

<br>

<br>

9. You will be prompted to restart your PC. Once your PC is finished restarting go back into "Computer Name/Domain Changes" settings. Right click "This PC" in file explorer and click on Properties > Rename this PC(advanced) > Change

<br>

<br>

10. Add the PC back to the domain by clicking the "Domain: " button. Then fill out the textfield with your domain name.

<br>

<br>

<div>

  

<button class="updateDetails">

![](/assets/blog/adding-back-to-the-domain-6.png){.myImg}

</button>

  

</div>

<br>

<br>

11. You will go through the same process as before with the workgroup. Fill the information of the user that has permission to change the domain name then you will be prompted to restart your PC when the process is done.

<br>

<br>

12. If you check inside of your Computers OU, you should see the PC in there.

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
