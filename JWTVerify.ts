var jwt = require('jsonwebtoken');
var fs = require('fs')
import Keycloak from "keycloak-js";
var id_token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJQM1lzUFFVaW1xcFJza1dLemkxOXVSem0tSzVtaFNIMm9EaF9PNDR3Szg4In0.eyJleHAiOjE2Mzg5NzQ1MzIsImlhdCI6MTYzODk3NDIzMiwiYXV0aF90aW1lIjowLCJqdGkiOiJmNjE3Y2VkMC1lMGQzLTQ2MTUtYWUzOS0xNDdiMTEyMmIyMGEiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvZGVtbyIsImF1ZCI6InRlc3QiLCJzdWIiOiIzMTVlZTgwNS04MTU1LTQ5NGUtYTRmZS1mNzU4ODg5MTI5NzIiLCJ0eXAiOiJJRCIsImF6cCI6InRlc3QiLCJzZXNzaW9uX3N0YXRlIjoiYjZmNWM5MDUtYTA2ZS00NzU0LThkOGEtMTc0MzY5N2U2NmI0IiwiYXRfaGFzaCI6InpnVFc1eWlrVmJQbmpzT2t0a19WSnciLCJhY3IiOiIxIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiYWRtaW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiIsImdpdmVuX25hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZ29vZ2xlLmNvbSJ9.IKC0JRcUKYv-4CFSLrsLS4_5WI1wkSb3WXV2WPpjd_X8gJ7XMKguIr8iSuauOKtF5nFwcC6KExCcUmSPm6HkSJ968HrOMiiGUaexU2bOhVZCp_K2qocDtm__Eh5TcYLwYC90tuB5AH9GihVFQ3VnYOQXEO8b01aKEz5NbTXoiEMkBzkyFElSY3LfgdBsRXf-VwLVZXJRUmOK2UEHssrmFfLrwh6xl0lzNaQ_R2-ZcPxCHKJcmAm1kzyFJjJ_ZPUkVTc1gAtlcyAW1ue7BqRjktdM-LJUrrNC-SzHzPobUlifbWaP5CuSCy8_Fr65aEqueLnDajvs7Pb5ST5_4VZXuA'
var public_key = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmoZzYcDPcOIAersthniDj53dZlYdw9leIIlOJCbdQYBVPxXjz1WK1cdfJRWqG8jpNzvfKgF6uc0HCdPTpdYiRZ+q7d5Mh8p+EXuwTUcE0HhaWWXzHrAtqmAvwPuZY3C/liteKmHzNGKWPyNUsD6XXcRbEJSnUmlIOe8VDjay7Tcevvliq80I5MOJcX9ObMbUyuJ7UAQJ3UT+DlpSVEQTU+C9o33VyOlzSOo0Ov9uIyn3Eb1zI+7g0gK6wdR03m8Fol5b38qi/ou2eA8yQm+CIW6sG/1PGLiSJ/W1yh0pXbOAgsCTKJnNzIo/F8rosPFo7Ymxxr1YtNkJXc5pH2y8qwIDAQAB'
var cert = fs.readFileSync('public.pem');  // get public key
var decoded = jwt.decode(id_token);
console.log(decoded)

Keycloak.