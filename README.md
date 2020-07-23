# WelcomeHomeRealty
This website is a template that businesses can use to create a home page, contact page, and sign up page.

# What is WelcomHomeRealty?
This website is a template that businesses can use to create a home page, contact page, and sign up page.  For this template, I used a real estate management company as the company and created a home page, contact page, and a new user sign up page.

# How does WelcomeHomeRealty work?
I downloaded Bootstrap v4.5 from this website:https://getbootstrap.com/docs/4.5/getting-started/introduction/ and included the files in my styles folder.
I also used the jQuery and JavaScript link below so that all the Bootstrap features would work.

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

I used the Bootstrap grid system for the layout features on the page, some added CSS for styling, and JavaScript for form verifications.

# Home Page
The home page is the first page a user will see. It features a Bootstrap navbar with a dropdown menu with links to the Contact and Sign Up pages.
The next element is a large image that stretches across the entire page. 
I added Bootstrap cards with a header, body, footer for additional ways to navigate to the Contact and Sign Up pages.
The last element on the page is a footer with the company name and year it was established.


# Contact Page
The contact page uses the Bootstrap grid system to align text and images on the same row.
The first row uses an HTML table to list the company's contact information.
The second row uses an HTML that the user can fill out.  The form regex pattern validation to ensure form values are valid.
I used JavaScript to attach an event listener to the form submit event.
When the form is submitted, the JavaScript code will prevent the default submit event and take all the field values and add it to a Message Object. 
That Message Object will then be added to an array of Message Objects.  
I also created a method that prints out the Message Object in a readable format.  
Programmers familiar with scripting language can use these methods to send the company an email every time a new message is received.

# Sign Up Page
This page is for new Tenants to sign up for a user account.  
The HTML form uses regex pattern validation to ensure form values are valid.
I used JavaScript to attach an event listener to the form submit event.
When the form is submitted, the JavaScript code will prevent the default submit event, and the code will verify the following:
1- The tenant exists in the company's database (I used an array of Tenants to simulate Tenant data in a database.)
2- If the tenant exists, does the tenant already have a login?
3 -The username requested is available. (Usernames must be unique.)

If the tenant exists, is a new user, and the username requested is available, a message will appear underneath the form saying that the signup was successful.
If the tenant exists, is a new user, and the username requested is not available, a message will appear underneath the form saying that the username is taken and to choose another.
If the tenant exists and already has a username and password, a message will appear underneath the form saying that the tenant already signed up and to contact the office for assistance.
If the tenant does not exist, a message will appear underneath the form saying that the tenant does not exist and to contact the office for assistance.


Here is some sample data that can be used for testing new user signups:
First Name, Last Name, Building, Apartment, Username, Password
Jane,Austen,Mansfield Park,1A,janeA111,jane@111
Emma,Woodhouse,Mansfield Park,1B, EmmaW111, emma@111
George,Knightley,Norland Park,1A
Jane,Fairfax,Norland Park,1B
Harriet,Smith,Northanger Abbey,1A
Frank,Churchill,Northanger Abbey,1B

# Who uses WelcomeHomeRealty
This website can be used for any company as a started template for a website.

# Goal
Create a template for a home page, contact page, and sign up page that can be reused by different uses as a starter template for their website.

# What is the license for this project? 
This website uses google fonts.
The rest of this project is in the public domain

# Developer Contact Information
Valerie Loevinger
v.loevinger@gmail.com






