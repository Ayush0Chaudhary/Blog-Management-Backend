# Blog Management Backend
This is a backend application for managing a blog platform, built using Django.

## Getting Started
`Clone the repository to your local machine`
Install the required dependencies using` pip install -r requirements.txt`

Run database migrations using `python manage.py migrate`

Create a superuser account using `python manage.py createsuperuser`

Start the development server using `python manage.py runserver`

## Features

User authentication and authorization using Django's built-in User model

CRUD functionality for blog posts

Commenting system for blog posts

Search functionality for blog posts

REST API for accessing blog posts and comments

## Endpoints

/api/posts/ - GET all blog posts, POST a new blog post
/api/posts/<int:pk>/ - GET a specific blog post, PUT or DELETE a specific blog post

## Dependencies
Django
Django REST framework
django-filter

## Contributing
Fork the repository
Create a new branch for your changes
Make your changes and commit them with descriptive commit messages
Push your changes to your fork
Submit a pull request to the main repository
