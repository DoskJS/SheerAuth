# SheerAuth
##### ⚡️ Fast, Light &amp; Simple SaaS Authentication

<br>

## **DEPENDENCIES**
#### **Fastify**
| Package                  | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | :-:    | --:        | --:     | --:           |
| bare                     | ✗      | 50444.8    | 1.90    | 7.89          |
| **fastify**              | ✓      | 50143.2    | 1.91    | 7.84          |
| connect                  | ✗      | 48796.0    | 1.97    | 7.63          |
| foxify                   | ✓      | 48658.4    | 1.97    | 6.91          |
| rayo                     | ✓      | 45461.6    | 2.11    | 7.11          |
| polka                    | ✓      | 45400.8    | 2.11    | 7.10          |
| micro                    | ✗      | 44692.8    | 2.15    | 6.99          |
| vapr                     | ✓      | 38684.8    | 2.50    | 5.50          |
| spirit                   | ✗      | 38611.0    | 2.26    | 6.04          |
| koa                      | ✗      | 34860.4    | 2.79    | 5.45          |
| express                  | ✓      | 26583.2    | 3.67    | 4.16          |
| hapi                     | ✓      | 17870.4    | 5.52    | 2.79          |
#### **Mongoose**
\<REASON GOES HERE>

<br>

## **ROUTES**

### **COMMON**
| METHOD | ROUTE | HEADER(S) | PARAMETER(S) | PAYLOAD | RESPONSE | DESCRIPTION | 
| ------ | ----- | --------- | ------------ | ------- | -------- | ----------- |
| GET | */healthcheck* | `NULL` | `NULL` | `NULL` | **HealthCheckResponse**<br>`Object<String, String>` | Server Health Check |
| POST | */authenticate* | `NULL` | `NULL` | **AuthenticationPayload**<br>`Object<String, String>` | **AuthenticationResponse**<br>`Object<String, String>` | Authenticate Using License Key |

### **ADMIN**
| METHOD | ROUTE | HEADER(S) | PARAMETER(S) | PAYLOAD | RESPONSE | DESCRIPTION | 
| ------ | ----- | --------- | ------------ | ------- | -------- | ----------- |
| GET | */license* | **AuthenticationToken**<br>`String` | **LicenseKey**<br>`String` | `NULL` | **License**<br>`Object<String, String>` | Get License Data |
| POST | */license* |  **AuthenticationToken**<br>`String` | **LicenseKey**<br>`String` | **License**<br>`Object<String, String>` | **Result**<br>`Object<String, String>` | Create/Update License |
| DELETE | */license* | **AuthenticationToken**<br>`String` | **LicenseKey**<br>`String` | `NULL` | **Result**<br>`Object<String, String>` | Delete License |

### **CLIENT**
| METHOD | ROUTE | HEADER(S) | PARAMETER(S) | PAYLOAD | RESPONSE | DESCRIPTION | 
| ------ | ----- | --------- | ------------ | ------- | -------- | ----------- |
| GET | */license* | **AuthenticationToken**<br>`String` | `NULL` | `NULL` | **License**<br>`Object<String, String>` | Get License Data |

<br>

## **INTERFACES**

#### **LicenseKey**
```typescript
const LicenseKey: String;
```

#### **License**
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
