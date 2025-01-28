---
title: " OUs, GP, Join a PC to a Domain, Pinging IP Address"
description: Fourth Lab Series
author: Dave Samuels
date: 2025-01-19T13:30:00.000Z
tags:
  - post
  - featured
image: /assets/blog/article-3.jpg
imageAlt: Fourth Installment
---
## Introduction

<br>

<br>

Today, I will be demonstrating how to create Organizational Units (OUs) and then create users within those OUs. I also plan to log into the new user account I created and run some command-line (CMD) commands on that PC. Additionally, I will explore Group Policy and review its various settings.

<br>

<br>

## Creating a new Organization Unit(OU)

<br>

<br>

Organizational Units (OUs) are directories (folders) within Active Directory designed to keep it organized. For example, you can create an IT OU or an HR OU to group related resources.

<br>

<br>

1. To create a new OU, right-click on your domain controller, then click New > Organizational Unit.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/creating-hr-ou-1.png){.myImg}
</button>

  

</div>

<br>

<br>

2. Fill out the "Name:" text field with the desired name for the OU.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/creating-hr-ou-2.png){.myImg}
</button>

  

</div>

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/creating-it-ou-1.png){.myImg}
</button>

  

</div>

<br>

<br>

### Creating user accounts to put into OUs

<br>

<br>

1. Right-click on the directory you want to create the user in, thenn click "New".

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/creating-user-maddy-1.png){.myImg}
</button>

  

</div>

<br>

<br>

2. Fill the text fields with the appropriate information

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/creating-user-maddy-2.png){.myImg}
</button>

  

</div>

<br>

<br>

3. Give the user a password

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/creating-user-maddy-3.png){.myImg}
</button>

  

</div>

<br>

<br>

4. Click "Finish".

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/creating-user-maddy-4.png){.myImg}
</button>

  

</div>

<br>

<br>

5. Drag the user in the OU that you created.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/maddy-in-hr-1.png){.myImg}
</button>

  

</div>

<br>

<br>

6. An error message will pop up. In this case, it is fine. Just click "Yes".

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/maddy-in-hr-2.png){.myImg}
</button>

  

</div>

<br>

<br>

7. I will drag my helpdesk user account in the "IT" OU.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/helpdesk-in-it.png){.myImg}
</button>

  

</div>

<br>

<br>

## Seeing a user's information through CMD

<br>

<br>

To view a user's information, such as their user account details, group memberships, password expiration date, and more, you can use the command net user [domain name] /domain. For example, let's check the account information for the user "maddy" that we just created.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/net-user-maddy-domain.png){.myImg}
</button>

  

</div>

<br>

<br>

## Seeing user information through Active Directory Users and Computers

<br>

<br>

To find Maddy's information using an alternative method, we can locate her profile through Active Directory Users and Computers. To view the full details of the account, we need to access the "Attribute Editor" settings. To do this, you must navigate to the Organizational Unit (OU) that the user belongs to.

<br>

<br>

1. Click on "View" in the navbar and click on "Advanced settings".

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/ad-find-user-6.png){.myImg}
</button>

  

</div>

<br>

<br>

2. If you're unsure which OU a user is located in, right-click on the domain controller and select "Find."

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/ad-find-user-2.png){.myImg}
</button>

  

</div>

<br>

<br>

3. Type in the user you want to find in the text field and search "Entire Directory".

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-1.png){.myImg}
</button>

  

</div>

<br>

<br>

4. Double-click on the user you found in the search results.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-2.png){.myImg}
</button>

  

</div>

<br>

<br>

5. Click on the "Object" tab.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-3.png){.myImg}
</button>

  

</div>

<br>

<br>

6. Here you will see the organizational unit the User is a part of. In my case, the user Maddy is in the HR OU.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-4.png){.myImg}
</button>

  

</div>

<br>

<br>

7. Navigate to the OU where the user is located, and double-click on their name.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-5.png){.myImg}
</button>

  

</div>

<br>

<br>

8. The "Attribute Editor" tab will now be visible in the user properties. Click on it to proceed.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-6.png){.myImg}
</button>

  

</div>

<br>

<br>

9. In the Attribute Editor, you can view additional information about the user. For example, it shows that Maddy's password was set on January 12, 2025.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/maddy-ad-attr-7.png){.myImg}
</button>

  

</div>

<br>

<br>

## Group Policy

<br>

<br>

1. The Group Policy can be accessed in Server Manager through the "Tools" menu in the navigation bar.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/group-policy-managment-1.png){.myImg}
</button>

  

</div>

<br>

<br>

2. Next, navigate to the domain controller and double-click on the "Default Domain Policy." Within this policy, you can modify various Windows settings, such as the duration before a user's password expires, the number of login attempts allowed, and more.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/group-policy-managment-2.png){.myImg}
</button>

  

</div>

<br>

<br>

3. Click on the "Settings" tab.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/group-policy-managment-3.png){.myImg}
</button>

  

</div>

<br>

<br>

4. This section provides information about the Domain Policy of your domain controller. Under "Account Policies/Account Lockout Policy," I noticed that the account lockout threshold is set to 0 invalid logon attempts. I will change this setting in the following steps.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/group-policy-managment-4.png){.myImg}
</button>

  

</div>

<br>

<br>

### Setting account lockout threshold

<br>

<br>

1. Right-click on "Default Domain" and click on "Edit".

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/group-policy-managment-5.png){.myImg}
</button>

  

</div>

<br>

<br>

2. Navigate to Computer Configuration > Policies > Windows Settings > Security Settings, and then double-click on Account Policies.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/group-policy-managment-6.png){.myImg}
</button>

  

</div>

<br>

<br>

3. Double-click on "Account Lockout Policy".

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/group-policy-managment-7.png){.myImg}
</button>

  

</div>

<br>

<br>

4. Double-click on "Account Lockout Duration." By default, it is set to "Not Defined." We need to change this setting in order to modify any other options.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/group-policy-managment-8.png){.myImg}
</button>

  

</div>

<br>

<br>

5. Click the checkbox labeled "Define this policy setting." This will set the value for "Account is locked out for:" to 30 minutes. I chose to leave it at 30 minutes. After setting your desired values, click "Apply" and then "OK."

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/group-policy-managment-9.png){.myImg}
</button>

  

</div>

<br>

<br>

6. When setting the "account lockout threshold," suggested value changes will be provided.
<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/group-policy-managment-10.png){.myImg}
</button>

  

</div>

<br>

<br>

7. I will change my account lockout threshold setting from 5 invalid login attempts. To do this, double-click on "Account lockout threshold."

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/group-policy-managment-12.png){.myImg}
</button>

  

</div>

<br>

<br>

8. Set the number of invalid logon attempts to your desired value.
<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/group-policy-managment-13.png){.myImg}
</button>

  

</div>

<br>

<br>

7. By navigating to Security Settings > Account Policies > Password Policy, you can view and modify the settings under "Policy."

<div>

  
<button class="updateDetails">

![](/assets/blog/group-policy-managment-14.png){.myImg}
</button>

  

</div>

<br>

<br>

8. I decided to change my maximum password age to 90 days.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/group-policy-managment-15.png){.myImg}
</button>

  

</div>

<br>

<br>

9. Once you have finished changing the settings in the Domain Policy, right-click on "Default Domain Policy" and select "Enforced."

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/group-policy-managment-16.png){.myImg}
</button>

  

</div>

<br>

<br>

10. Navigate to "Account Policies" > "Password Policy" under the "Settings" tab in the Default Domain Policy, and you should see the changes you made.

<br>

<br>
<div>

  

<button class="updateDetails">

![](/assets/blog/group-policy-managment-17.png){.myImg}
</button>

  

</div>

<br>

<br>

## Summary

<br>

<br>

In this lab, I explored how Organizational Units (OUs) are used to organize directories within Active Directory. I created some OUs and added users to them. I logged into one of the newly created user accounts, '"Maddy", and used command-line tools like `net user maddy /domain` to view her information. Additionally, I reviewed the Group Policy, including how to access it and set an account lockout threshold. The account lockout threshold specifies the number of failed login attempts allowed before an account is locked. This process also allowed me to modify several Group Policy settings, such as password expiration policies, minimum password length, and more.
