# SheerAuth
⚡️ Fast, Light &amp; Simple SaaS Authentication

## License Routes - Admin
METHOD | ROUTE | DESCRIPTRION | AUTH LEVEL
------------ | ------------- | ------------- | ------------- |
GET | /license | Read license data | ADMIN
POST | /license | Create license data | ADMIN
PUT | /license | Update license data | ADMIN
DELETE | /license | Delete license data | ADMIN

## License Routes - Client
METHOD | ROUTE | DESCRIPTRION | AUTH LEVEL
------------ | ------------- | ------------- | ------------- |
GET | /validate | Validate active key | *
POST | /activate | Activate license key | *
POST | /deactivate | Deactivate license key | *