# CosMos : an open source knowledge space / blog app.

## Features

- Create, edit, and delete blog posts with a rich text editor
- Organize content with tags and categories
- User authentication and profile management
- Markdown support for writing and formatting
- Open source and customizable

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Visit `http://localhost:3000` in your browser

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.


#### These are the tables you have to create in mysql.

`mysql2` package is included as a dependency in the project. 

```sql
mysql> use blogapp
Database changed
mysql> show tables;
+-------------------+
| Tables_in_blogapp |
+-------------------+
| blog              |
| user              |
+-------------------+
2 rows in set (0.00 sec)

mysql> desc blog;
+------------+--------------+------+-----+-------------------+-----------------------------------------------+
| Field      | Type         | Null | Key | Default           | Extra                                         |
+------------+--------------+------+-----+-------------------+-----------------------------------------------+
| blogId     | int          | NO   | PRI | NULL              | auto_increment                                |
| heading    | varchar(255) | NO   |     | NULL              |                                               |
| content    | text         | NO   |     | NULL              |                                               |
| topic      | varchar(255) | NO   |     | NULL              |                                               |
| userId     | int          | YES  | MUL | NULL              |                                               |
| created_at | timestamp    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED                             |
| updated_at | timestamp    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |
+------------+--------------+------+-----+-------------------+-----------------------------------------------+
7 rows in set (0.00 sec)

mysql> desc user;
+------------+--------------+------+-----+-------------------+-----------------------------------------------+
| Field      | Type         | Null | Key | Default           | Extra                                         |
+------------+--------------+------+-----+-------------------+-----------------------------------------------+
| userId     | int          | NO   | PRI | NULL              | auto_increment                                |
| username   | varchar(255) | NO   |     | NULL              |                                               |
| password   | varchar(255) | NO   |     | NULL              |                                               |
| email      | varchar(255) | NO   | UNI | NULL              |                                               |
| created_at | timestamp    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED                             |
| updated_at | timestamp    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |
+------------+--------------+------+-----+-------------------+-----------------------------------------------+
6 rows in set (0.00 sec)
```

create a `.env.loacl` file in the root.

```bash
NEXT_PUBLIC_API_BASE_URL = http://localhost:3000 
DB_USER = ''  # enter username
DB_USER_PASSWORD = '' # enter password
DB_NAME = '' # enter database name
DB_HOST = '' # enter hostname
```

