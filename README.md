# SheerAuth
##### ⚡️ Fast, Light &amp; Simple SaaS Authentication
<<<<<<< HEAD

=======
Server powered by Fastify, utilzes JWT
>>>>>>> 176c5adcb96340e203eac6253f70504e9047c174
<br>

## **DEPENDENCIES**
#### **Fastify**
\<REASON GOES HERE>
#### **Mongoose**
<REASON GOES HERE>

## **ROUTES**

#### **COMMON**
| METHOD | ROUTE | HEADER(S) | PARAMETER(S) | PAYLOAD | RESPONSE | DESCRIPTION | 
| ------ | ----- | --------- | ------------ | ------- | -------- | ----------- |
| GET | */healthcheck* | `NULL` | `NULL` | `NULL` | **HealthCheckResponse**<br>`Object<String, String>` | Server Health Check |
| POST | */authenticate* | `NULL` | `NULL` | **AuthenticationPayload**<br>`Object<String, String>` | **AuthenticationResponse**<br>`Object<String, String>` | Authenticate Using License Key |

#### **ADMIN**
| METHOD | ROUTE | HEADER(S) | PARAMETER(S) | PAYLOAD | RESPONSE | DESCRIPTION | 
| ------ | ----- | --------- | ------------ | ------- | -------- | ----------- |
| GET | */license* | **AuthenticationToken**<br>`String` | **LicenseKey**<br>`String` | `NULL` | **License**<br>`Object<String, String>` | Get License Data |
| POST | */license* |  **AuthenticationToken**<br>`String` | **LicenseKey**<br>`String` | **License**<br>`Object<String, String>` | **Result**<br>`Object<String, String>` | Create/Update License |
| DELETE | */license* | **AuthenticationToken**<br>`String` | **LicenseKey**<br>`String` | `NULL` | **Result**<br>`Object<String, String>` | Delete License |

#### **CLIENT**
| METHOD | ROUTE | HEADER(S) | PARAMETER(S) | PAYLOAD | RESPONSE | DESCRIPTION | 
| ------ | ----- | --------- | ------------ | ------- | -------- | ----------- |
| GET | */license* | **AuthenticationToken**<br>`String` | `NULL` | `NULL` | **License**<br>`Object<String, String>` | Get License Data |

<br>

## **INTERFACES**

#### **LicenseKey**
```typescript
const LicenseKey: String;
```

<<<<<<< HEAD
#### **License**
=======
### **License**
>>>>>>> 176c5adcb96340e203eac6253f70504e9047c174
```typescript
interface License {
    activated: Boolean;
    key: String;
    identifier: String;
}
```

#### **AuthenticationToken**
```typescript
const AuthenticationToken: String;
```

#### **Result**
```typescript
interface Result {
    result: String
}
```

#### **HealthCheckResponse**
```typescript
interface HealthCheckResponse {
    status: String;
}
```

#### **AuthenticationPayload**
```typescript
interface AuthenticationPayload {
    licenseKey: LicenseKey;
    identifier: String;
} 
```

#### **AuthenticationResponse**
```typescript
interface AuthenticationResponse {
    token: String;
} 
```
