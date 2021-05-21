# Security Policy

## Supported Version

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

### node-forge 0.8.5 - peer dependency

CVE-2020-7720
Vulnerable versions: < 0.10.0
Patched version: 0.10.0
The package node-forge before 0.10.0 is vulnerable to Prototype Pollution via the util.setPath function. Note: Version 0.10.0 is a breaking change removing the vulnerable functions.

### highlight.js 9.12.0 - peer dependency

GHSA-7wwv-vh3v-89cq
Vulnerable versions: >= 9.0.0, < 10.4.1
Patched version: 10.4.1
Impact: Potential ReDOS vulnerabilities (exponential and polynomial RegEx backtracking)
oswasp:

The Regular expression Denial of Service (ReDoS) is a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size). An attacker can then cause a program using a Regular Expression to enter these extreme situations and then hang for a very long time.
If are you are using Highlight.js to highlight user-provided data you are possibly vulnerable. On the client-side (in a browser or Electron environment) risks could include lengthy freezes or crashes... On the server-side infinite freezes could occur... effectively preventing users from accessing your app or service (ie, Denial of Service).
This is an issue with grammars shipped with the parser (and potentially 3rd party grammars also), not the parser itself. If you are using Highlight.js with any of the following grammars you are vulnerable. If you are using highlightAuto to detect the language (and have any of these grammars registered) you are vulnerable.
All versions prior to 10.4.1 are vulnerable, including version 9.18.5.
