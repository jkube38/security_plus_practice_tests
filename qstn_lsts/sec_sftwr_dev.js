export default `[
    {
      "id": "8-001",
      "type": "MCQ",
      "question": "Which term describes the practice of integrating security into every phase of the software development lifecycle?",
      "options": ["Secure SDLC", "DevOps", "Waterfall", "Agile"],
      "answer": "Secure SDLC",
      "explanation": "Secure SDLC embeds security requirements and testing throughout development."
    },
    {
      "id": "8-002",
      "type": "MCQ",
      "question": "Which term describes the process of identifying security requirements early in development?",
      "options": ["Requirements analysis", "Threat modeling", "Code review", "Penetration testing"],
      "answer": "Requirements analysis",
      "explanation": "Security requirements are defined during early planning stages."
    },
    {
      "id": "8-003",
      "type": "MCQ",
      "question": "Which term describes the process of identifying potential threats to an application?",
      "options": ["Threat modeling", "Code review", "Static analysis", "Dynamic analysis"],
      "answer": "Threat modeling",
      "explanation": "Threat modeling identifies threats, vulnerabilities, and mitigations."
    },
    {
      "id": "8-004",
      "type": "MCQ",
      "question": "Which framework is commonly used for threat modeling?",
      "options": ["STRIDE", "DREAD", "OWASP Top 10", "MITRE ATT&CK"],
      "answer": "STRIDE",
      "explanation": "STRIDE identifies threats like spoofing, tampering, and information disclosure."
    },
    {
      "id": "8-005",
      "type": "MCQ",
      "question": "Which term describes analyzing source code without executing it?",
      "options": ["Static analysis", "Dynamic analysis", "Penetration testing", "Fuzzing"],
      "answer": "Static analysis",
      "explanation": "Static analysis detects vulnerabilities by reviewing code structure."
    },
    {
      "id": "8-006",
      "type": "MCQ",
      "question": "Which term describes analyzing an application while it is running?",
      "options": ["Dynamic analysis", "Static analysis", "Code review", "Fuzzing"],
      "answer": "Dynamic analysis",
      "explanation": "Dynamic analysis tests applications during execution."
    },
    {
      "id": "8-007",
      "type": "MCQ",
      "question": "Which term describes automated testing that sends unexpected inputs to an application?",
      "options": ["Fuzzing", "Static analysis", "Dynamic analysis", "Code review"],
      "answer": "Fuzzing",
      "explanation": "Fuzzing identifies crashes and unexpected behavior."
    },
    {
      "id": "8-008",
      "type": "MCQ",
      "question": "Which term describes reviewing code manually for security issues?",
      "options": ["Code review", "Static analysis", "Dynamic analysis", "Fuzzing"],
      "answer": "Code review",
      "explanation": "Code reviews identify logic flaws and insecure coding practices."
    },
    {
      "id": "8-009",
      "type": "MCQ",
      "question": "Which term describes testing an application from an attacker’s perspective?",
      "options": ["Penetration testing", "Static analysis", "Dynamic analysis", "Code review"],
      "answer": "Penetration testing",
      "explanation": "Penetration testing simulates real-world attacks."
    },
    {
      "id": "8-010",
      "type": "MCQ",
      "question": "Which organization publishes the Top 10 list of common web application vulnerabilities?",
      "options": ["OWASP", "NIST", "ISO", "MITRE"],
      "answer": "OWASP",
      "explanation": "OWASP Top 10 highlights major web security risks."
    },
    {
      "id": "8-011",
      "type": "MCQ",
      "question": "Which term describes the practice of writing code that anticipates and handles errors securely?",
      "options": ["Secure coding", "Error logging", "Input validation", "Code review"],
      "answer": "Secure coding",
      "explanation": "Secure coding prevents vulnerabilities through safe development practices."
    },
    {
      "id": "8-012",
      "type": "MCQ",
      "question": "Which term describes validating user input to prevent malicious data?",
      "options": ["Input validation", "Output encoding", "Error handling", "Code review"],
      "answer": "Input validation",
      "explanation": "Input validation prevents injection attacks."
    },
    {
      "id": "8-013",
      "type": "MCQ",
      "question": "Which term describes encoding output to prevent cross-site scripting?",
      "options": ["Output encoding", "Input validation", "Error handling", "Code review"],
      "answer": "Output encoding",
      "explanation": "Encoding prevents browsers from interpreting malicious scripts."
    },
    {
      "id": "8-014",
      "type": "MCQ",
      "question": "Which term describes securely handling unexpected application errors?",
      "options": ["Error handling", "Input validation", "Output encoding", "Code review"],
      "answer": "Error handling",
      "explanation": "Secure error handling prevents information leakage."
    },
    {
      "id": "8-015",
      "type": "MCQ",
      "question": "Which term describes the process of managing changes to code securely?",
      "options": ["Change management", "Version control", "Code review", "Static analysis"],
      "answer": "Change management",
      "explanation": "Change management ensures changes are reviewed and approved."
    },
    {
      "id": "8-016",
      "type": "MCQ",
      "question": "Which tool tracks changes to source code over time?",
      "options": ["Version control", "Static analysis", "Dynamic analysis", "Fuzzing"],
      "answer": "Version control",
      "explanation": "Version control systems like Git track code changes."
    },
    {
      "id": "8-017",
      "type": "MCQ",
      "question": "Which term describes the practice of automating software deployment and testing?",
      "options": ["CI/CD", "DevOps", "Secure SDLC", "Agile"],
      "answer": "CI/CD",
      "explanation": "Continuous Integration/Continuous Deployment automates builds and testing."
    },
    {
      "id": "8-018",
      "type": "MCQ",
      "question": "Which term describes the collaboration between development and operations teams?",
      "options": ["DevOps", "CI/CD", "Secure SDLC", "Agile"],
      "answer": "DevOps",
      "explanation": "DevOps improves communication and automation across teams."
    },
    {
      "id": "8-019",
      "type": "MCQ",
      "question": "Which term describes the practice of scanning third-party libraries for vulnerabilities?",
      "options": ["Dependency scanning", "Static analysis", "Dynamic analysis", "Fuzzing"],
      "answer": "Dependency scanning",
      "explanation": "Dependency scanning identifies vulnerable external components."
    },
    {
      "id": "8-020",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring software is built from trusted components?",
      "options": ["Software supply chain security", "Dependency scanning", "Code review", "Static analysis"],
      "answer": "Software supply chain security",
      "explanation": "Supply chain security protects against compromised dependencies."
    },
    {
      "id": "8-021",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring code changes are reviewed before merging?",
      "options": ["Peer review", "Static analysis", "Dynamic analysis", "Fuzzing"],
      "answer": "Peer review",
      "explanation": "Peer reviews help catch logic flaws and insecure coding practices."
    },
    {
      "id": "8-022",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring developers follow secure coding standards?",
      "options": ["Secure coding guidelines", "Code review", "Static analysis", "Threat modeling"],
      "answer": "Secure coding guidelines",
      "explanation": "Guidelines define best practices for writing secure code."
    },
    {
      "id": "8-023",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring software dependencies are up to date?",
      "options": ["Dependency management", "Version control", "Static analysis", "Fuzzing"],
      "answer": "Dependency management",
      "explanation": "Dependency management ensures libraries are patched and secure."
    },
    {
      "id": "8-024",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring software is tested automatically after each change?",
      "options": ["Continuous testing", "Static analysis", "Dynamic analysis", "Code review"],
      "answer": "Continuous testing",
      "explanation": "Continuous testing automates validation during development."
    },
    {
      "id": "8-025",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring code is built automatically after each change?",
      "options": ["Continuous integration", "Continuous deployment", "Version control", "Static analysis"],
      "answer": "Continuous integration",
      "explanation": "CI automates building and testing code changes."
    },
    {
      "id": "8-026",
      "type": "MCQ",
      "question": "Which term describes the practice of automatically releasing software updates?",
      "options": ["Continuous deployment", "Continuous integration", "Version control", "Static analysis"],
      "answer": "Continuous deployment",
      "explanation": "CD automates releasing tested code to production."
    },
    {
      "id": "8-027",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring software is deployed consistently across environments?",
      "options": ["Configuration management", "Version control", "Continuous deployment", "Static analysis"],
      "answer": "Configuration management",
      "explanation": "Configuration management ensures consistent environment settings."
    },
    {
      "id": "8-028",
      "type": "MCQ",
      "question": "Which term describes the practice of storing environment configurations in code?",
      "options": ["Infrastructure as code", "Configuration management", "Version control", "Continuous deployment"],
      "answer": "Infrastructure as code",
      "explanation": "IaC automates environment creation using code."
    },
    {
      "id": "8-029",
      "type": "MCQ",
      "question": "Which term describes the practice of isolating applications in lightweight environments?",
      "options": ["Containerization", "Virtualization", "Infrastructure as code", "Configuration management"],
      "answer": "Containerization",
      "explanation": "Containers isolate applications and dependencies."
    },
    {
      "id": "8-030",
      "type": "MCQ",
      "question": "Which term describes the practice of scanning container images for vulnerabilities?",
      "options": ["Container scanning", "Dependency scanning", "Static analysis", "Dynamic analysis"],
      "answer": "Container scanning",
      "explanation": "Container scanning identifies insecure images."
    },
    {
      "id": "8-031",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring APIs are protected against unauthorized access?",
      "options": ["API security", "Input validation", "Output encoding", "Code review"],
      "answer": "API security",
      "explanation": "API security protects endpoints from attacks."
    },
    {
      "id": "8-032",
      "type": "MCQ",
      "question": "Which term describes the practice of limiting API access based on user roles?",
      "options": ["API authorization", "API authentication", "Input validation", "Output encoding"],
      "answer": "API authorization",
      "explanation": "Authorization ensures users can only access allowed resources."
    },
    {
      "id": "8-033",
      "type": "MCQ",
      "question": "Which term describes verifying the identity of users accessing an API?",
      "options": ["API authentication", "API authorization", "Input validation", "Output encoding"],
      "answer": "API authentication",
      "explanation": "Authentication verifies user identity."
    },
    {
      "id": "8-034",
      "type": "MCQ",
      "question": "Which term describes the practice of limiting how often an API can be called?",
      "options": ["Rate limiting", "Input validation", "Output encoding", "Code review"],
      "answer": "Rate limiting",
      "explanation": "Rate limiting prevents abuse and denial-of-service attacks."
    },
    {
      "id": "8-035",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring sensitive data is not exposed in logs?",
      "options": ["Secure logging", "Error handling", "Input validation", "Output encoding"],
      "answer": "Secure logging",
      "explanation": "Secure logging prevents leakage of sensitive information."
    },
    {
      "id": "8-036",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring logs cannot be tampered with?",
      "options": ["Log integrity", "Secure logging", "Error handling", "Code review"],
      "answer": "Log integrity",
      "explanation": "Log integrity ensures logs remain unchanged."
    },
    {
      "id": "8-037",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring logs are stored for the required duration?",
      "options": ["Log retention", "Log integrity", "Secure logging", "Error handling"],
      "answer": "Log retention",
      "explanation": "Retention policies define how long logs must be stored."
    },
    {
      "id": "8-038",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring logs are monitored for suspicious activity?",
      "options": ["Log monitoring", "Log retention", "Log integrity", "Secure logging"],
      "answer": "Log monitoring",
      "explanation": "Monitoring detects anomalies and attacks."
    },
    {
      "id": "8-039",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring software is tested for security vulnerabilities before release?",
      "options": ["Security testing", "Static analysis", "Dynamic analysis", "Code review"],
      "answer": "Security testing",
      "explanation": "Security testing validates software security before deployment."
    },
    {
      "id": "8-040",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring software is deployed securely?",
      "options": ["Secure deployment", "Security testing", "Static analysis", "Dynamic analysis"],
      "answer": "Secure deployment",
      "explanation": "Secure deployment ensures software is released with proper security controls."
    },
    {
      "id": "8-041",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring software is tested in an environment identical to production?",
      "options": ["Environment parity", "Configuration management", "Continuous testing", "Dynamic analysis"],
      "answer": "Environment parity",
      "explanation": "Environment parity reduces deployment issues by matching production."
    },
    {
      "id": "8-042",
      "type": "MCQ",
      "question": "Which term describes the practice of isolating development, testing, and production environments?",
      "options": ["Environment separation", "Containerization", "Virtualization", "Infrastructure as code"],
      "answer": "Environment separation",
      "explanation": "Environment separation prevents accidental changes across environments."
    },
    {
      "id": "8-043",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring sensitive data is not used in development environments?",
      "options": ["Data masking", "Input validation", "Output encoding", "Secure logging"],
      "answer": "Data masking",
      "explanation": "Data masking replaces sensitive data with safe substitutes."
    },
    {
      "id": "8-044",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring only authorized developers can access source code?",
      "options": ["Source code access control", "Version control", "Peer review", "Static analysis"],
      "answer": "Source code access control",
      "explanation": "Access control protects source code from unauthorized changes."
    },
    {
      "id": "8-045",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring code changes are tracked and reversible?",
      "options": ["Version control", "Configuration management", "Continuous integration", "Peer review"],
      "answer": "Version control",
      "explanation": "Version control systems track changes and allow rollback."
    },
    {
      "id": "8-046",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring software dependencies are verified before use?",
      "options": ["Dependency verification", "Dependency scanning", "Static analysis", "Dynamic analysis"],
      "answer": "Dependency verification",
      "explanation": "Verification ensures dependencies come from trusted sources."
    },
    {
      "id": "8-047",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring third-party libraries are trusted and secure?",
      "options": ["Software composition analysis", "Dependency scanning", "Static analysis", "Fuzzing"],
      "answer": "Software composition analysis",
      "explanation": "SCA identifies vulnerabilities in third-party components."
    },
    {
      "id": "8-048",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring software is built from verified components?",
      "options": ["Build integrity", "Secure deployment", "Continuous integration", "Configuration management"],
      "answer": "Build integrity",
      "explanation": "Build integrity ensures software is assembled securely."
    },
    {
      "id": "8-049",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring build pipelines are protected from tampering?",
      "options": ["Pipeline security", "Build integrity", "Continuous integration", "Configuration management"],
      "answer": "Pipeline security",
      "explanation": "Pipeline security protects CI/CD systems from compromise."
    },
    {
      "id": "8-050",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring secrets such as API keys are stored securely?",
      "options": ["Secrets management", "Secure logging", "Input validation", "Output encoding"],
      "answer": "Secrets management",
      "explanation": "Secrets management protects sensitive credentials."
    },
    {
      "id": "8-051",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring secrets are rotated regularly?",
      "options": ["Secrets rotation", "Secrets management", "Configuration management", "Version control"],
      "answer": "Secrets rotation",
      "explanation": "Rotation reduces exposure by limiting secret lifetime."
    },
    {
      "id": "8-052",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring secrets are not stored in source code?",
      "options": ["Secrets isolation", "Secrets rotation", "Secrets management", "Configuration management"],
      "answer": "Secrets isolation",
      "explanation": "Secrets isolation prevents accidental exposure in code repositories."
    },
    {
      "id": "8-053",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications handle authentication securely?",
      "options": ["Secure authentication", "API security", "Input validation", "Output encoding"],
      "answer": "Secure authentication",
      "explanation": "Secure authentication prevents unauthorized access."
    },
    {
      "id": "8-054",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications handle authorization securely?",
      "options": ["Secure authorization", "Secure authentication", "Input validation", "Output encoding"],
      "answer": "Secure authorization",
      "explanation": "Secure authorization ensures users only access allowed resources."
    },
    {
      "id": "8-055",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications handle session data securely?",
      "options": ["Session management", "Secure authorization", "Secure authentication", "Input validation"],
      "answer": "Session management",
      "explanation": "Session management protects session tokens and user state."
    },
    {
      "id": "8-056",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring session tokens cannot be guessed?",
      "options": ["Session token entropy", "Session management", "Secure authentication", "Secure authorization"],
      "answer": "Session token entropy",
      "explanation": "High entropy prevents attackers from predicting session tokens."
    },
    {
      "id": "8-057",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring session tokens expire after inactivity?",
      "options": ["Session timeout", "Session token entropy", "Session management", "Secure authentication"],
      "answer": "Session timeout",
      "explanation": "Timeouts reduce risk from abandoned sessions."
    },
    {
      "id": "8-058",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring session tokens are invalidated after logout?",
      "options": ["Session invalidation", "Session timeout", "Session management", "Secure authentication"],
      "answer": "Session invalidation",
      "explanation": "Invalidation prevents reuse of old session tokens."
    },
    {
      "id": "8-059",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications handle errors without exposing sensitive information?",
      "options": ["Secure error handling", "Input validation", "Output encoding", "Secure logging"],
      "answer": "Secure error handling",
      "explanation": "Secure error handling prevents information leakage."
    },
    {
      "id": "8-060",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications sanitize user input before processing?",
      "options": ["Input sanitization", "Input validation", "Output encoding", "Secure error handling"],
      "answer": "Input sanitization",
      "explanation": "Sanitization removes harmful characters from user input."
    },
    {
      "id": "8-061",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications validate data before storing it?",
      "options": ["Data validation", "Input sanitization", "Output encoding", "Secure logging"],
      "answer": "Data validation",
      "explanation": "Data validation ensures stored data meets expected formats."
    },
    {
      "id": "8-062",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications encode data before displaying it?",
      "options": ["Output encoding", "Input validation", "Data validation", "Secure logging"],
      "answer": "Output encoding",
      "explanation": "Output encoding prevents browsers from interpreting malicious scripts."
    },
    {
      "id": "8-063",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications restrict file uploads to safe types?",
      "options": ["File type validation", "Input validation", "Output encoding", "Secure logging"],
      "answer": "File type validation",
      "explanation": "File type validation prevents malicious file uploads."
    },
    {
      "id": "8-064",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring uploaded files are scanned for malware?",
      "options": ["File scanning", "File type validation", "Input sanitization", "Secure logging"],
      "answer": "File scanning",
      "explanation": "File scanning detects malicious content in uploaded files."
    },
    {
      "id": "8-065",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications restrict file download paths?",
      "options": ["Path validation", "File scanning", "Input validation", "Output encoding"],
      "answer": "Path validation",
      "explanation": "Path validation prevents directory traversal attacks."
    },
    {
      "id": "8-066",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications restrict database queries to safe patterns?",
      "options": ["Query parameterization", "Input validation", "Output encoding", "Secure logging"],
      "answer": "Query parameterization",
      "explanation": "Parameterization prevents SQL injection attacks."
    },
    {
      "id": "8-067",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications restrict command execution to safe patterns?",
      "options": ["Command parameterization", "Query parameterization", "Input validation", "Output encoding"],
      "answer": "Command parameterization",
      "explanation": "Command parameterization prevents command injection attacks."
    },
    {
      "id": "8-068",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications restrict access to sensitive functions?",
      "options": ["Function-level authorization", "Secure authentication", "Input validation", "Output encoding"],
      "answer": "Function-level authorization",
      "explanation": "Function-level authorization prevents unauthorized access to sensitive operations."
    },
    {
      "id": "8-069",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications restrict access to sensitive data fields?",
      "options": ["Field-level authorization", "Function-level authorization", "Input validation", "Output encoding"],
      "answer": "Field-level authorization",
      "explanation": "Field-level authorization prevents unauthorized access to sensitive data."
    },
    {
      "id": "8-070",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications restrict access to sensitive API endpoints?",
      "options": ["Endpoint authorization", "Field-level authorization", "Function-level authorization", "Input validation"],
      "answer": "Endpoint authorization",
      "explanation": "Endpoint authorization protects sensitive API routes."
    },
    {
      "id": "8-071",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications encrypt sensitive data before storing it?",
      "options": ["Data-at-rest encryption", "Data-in-transit encryption", "Output encoding", "Input validation"],
      "answer": "Data-at-rest encryption",
      "explanation": "Data-at-rest encryption protects stored sensitive data."
    },
    {
      "id": "8-072",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications encrypt sensitive data before transmitting it?",
      "options": ["Data-in-transit encryption", "Data-at-rest encryption", "Output encoding", "Input validation"],
      "answer": "Data-in-transit encryption",
      "explanation": "Data-in-transit encryption protects data during transmission."
    },
    {
      "id": "8-073",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications use secure protocols for communication?",
      "options": ["Secure protocol enforcement", "Data-in-transit encryption", "Output encoding", "Input validation"],
      "answer": "Secure protocol enforcement",
      "explanation": "Secure protocol enforcement ensures communication uses secure standards."
    },
    {
      "id": "8-074",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications use secure cookie settings?",
      "options": ["Secure cookie configuration", "Session management", "Input validation", "Output encoding"],
      "answer": "Secure cookie configuration",
      "explanation": "Secure cookie settings prevent unauthorized cookie access."
    },
    {
      "id": "8-075",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring cookies cannot be accessed by client-side scripts?",
      "options": ["HttpOnly flag", "Secure flag", "Session timeout", "Session invalidation"],
      "answer": "HttpOnly flag",
      "explanation": "HttpOnly prevents JavaScript from accessing cookies."
    },
    {
      "id": "8-076",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring cookies are only sent over encrypted connections?",
      "options": ["Secure flag", "HttpOnly flag", "Session timeout", "Session invalidation"],
      "answer": "Secure flag",
      "explanation": "Secure flag ensures cookies are only sent over HTTPS."
    },
    {
      "id": "8-077",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against cross-site request forgery?",
      "options": ["CSRF protection", "XSS protection", "Input validation", "Output encoding"],
      "answer": "CSRF protection",
      "explanation": "CSRF protection prevents unauthorized actions performed by authenticated users."
    },
    {
      "id": "8-078",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against cross-site scripting?",
      "options": ["XSS protection", "CSRF protection", "Input validation", "Output encoding"],
      "answer": "XSS protection",
      "explanation": "XSS protection prevents malicious scripts from executing in browsers."
    },
    {
      "id": "8-079",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against SQL injection?",
      "options": ["SQL injection protection", "XSS protection", "CSRF protection", "Output encoding"],
      "answer": "SQL injection protection",
      "explanation": "SQL injection protection prevents attackers from manipulating database queries."
    },
    {
      "id": "8-080",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against command injection?",
      "options": ["Command injection protection", "SQL injection protection", "XSS protection", "CSRF protection"],
      "answer": "Command injection protection",
      "explanation": "Command injection protection prevents attackers from executing unauthorized commands."
    },
    {
      "id": "8-081",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure deserialization?",
      "options": ["Deserialization protection", "Serialization protection", "Input validation", "Output encoding"],
      "answer": "Deserialization protection",
      "explanation": "Deserialization protection prevents attackers from injecting malicious objects."
    },
    {
      "id": "8-082",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure serialization?",
      "options": ["Serialization protection", "Deserialization protection", "Input validation", "Output encoding"],
      "answer": "Serialization protection",
      "explanation": "Serialization protection ensures serialized data cannot be manipulated."
    },
    {
      "id": "8-083",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure redirects?",
      "options": ["Redirect protection", "Input validation", "Output encoding", "CSRF protection"],
      "answer": "Redirect protection",
      "explanation": "Redirect protection prevents attackers from redirecting users to malicious sites."
    },
    {
      "id": "8-084",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure file access?",
      "options": ["File access protection", "Path validation", "File scanning", "Input validation"],
      "answer": "File access protection",
      "explanation": "File access protection prevents unauthorized file access."
    },
    {
      "id": "8-085",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure configuration settings?",
      "options": ["Secure configuration", "Configuration management", "Version control", "Input validation"],
      "answer": "Secure configuration",
      "explanation": "Secure configuration ensures applications use safe settings."
    },
    {
      "id": "8-086",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure default settings?",
      "options": ["Secure defaults", "Secure configuration", "Input validation", "Output encoding"],
      "answer": "Secure defaults",
      "explanation": "Secure defaults prevent insecure configurations from being used."
    },
    {
      "id": "8-087",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure API keys?",
      "options": ["API key protection", "Secrets management", "Input validation", "Output encoding"],
      "answer": "API key protection",
      "explanation": "API key protection prevents unauthorized use of API credentials."
    },
    {
      "id": "8-088",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure tokens?",
      "options": ["Token protection", "Session management", "Input validation", "Output encoding"],
      "answer": "Token protection",
      "explanation": "Token protection ensures tokens cannot be stolen or reused."
    },
    {
      "id": "8-089",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure session storage?",
      "options": ["Session storage protection", "Session management", "Input validation", "Output encoding"],
      "answer": "Session storage protection",
      "explanation": "Session storage protection prevents unauthorized access to stored session data."
    },
    {
      "id": "8-090",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure cookie storage?",
      "options": ["Cookie storage protection", "Secure cookie configuration", "Session management", "Input validation"],
      "answer": "Cookie storage protection",
      "explanation": "Cookie storage protection prevents unauthorized cookie access."
    },
    {
      "id": "8-091",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure API rate limits?",
      "options": ["Rate limit protection", "API authorization", "Input validation", "Output encoding"],
      "answer": "Rate limit protection",
      "explanation": "Rate limit protection prevents abuse of API endpoints."
    },
    {
      "id": "8-092",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure error messages?",
      "options": ["Error message protection", "Secure error handling", "Input validation", "Output encoding"],
      "answer": "Error message protection",
      "explanation": "Error message protection prevents leakage of sensitive information."
    },
    {
      "id": "8-093",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure logging practices?",
      "options": ["Logging protection", "Secure logging", "Log integrity", "Log retention"],
      "answer": "Logging protection",
      "explanation": "Logging protection ensures logs do not expose sensitive data."
    },
    {
      "id": "8-094",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure monitoring practices?",
      "options": ["Monitoring protection", "Log monitoring", "Secure logging", "Input validation"],
      "answer": "Monitoring protection",
      "explanation": "Monitoring protection ensures monitoring systems detect suspicious activity."
    },
    {
      "id": "8-095",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure dependency updates?",
      "options": ["Dependency update protection", "Dependency scanning", "Version control", "Static analysis"],
      "answer": "Dependency update protection",
      "explanation": "Dependency update protection ensures updates do not introduce vulnerabilities."
    },
    {
      "id": "8-096",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure build processes?",
      "options": ["Build process protection", "Pipeline security", "Continuous integration", "Configuration management"],
      "answer": "Build process protection",
      "explanation": "Build process protection ensures builds cannot be tampered with."
    },
    {
      "id": "8-097",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure deployment processes?",
      "options": ["Deployment process protection", "Secure deployment", "Continuous deployment", "Configuration management"],
      "answer": "Deployment process protection",
      "explanation": "Deployment process protection ensures deployments follow secure procedures."
    },
    {
      "id": "8-098",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure rollback processes?",
      "options": ["Rollback protection", "Deployment process protection", "Version control", "Configuration management"],
      "answer": "Rollback protection",
      "explanation": "Rollback protection ensures rollbacks do not introduce vulnerabilities."
    },
    {
      "id": "8-099",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure configuration changes?",
      "options": ["Configuration change protection", "Rollback protection", "Configuration management", "Version control"],
      "answer": "Configuration change protection",
      "explanation": "Configuration change protection ensures changes are secure and authorized."
    },
    {
      "id": "8-100",
      "type": "MCQ",
      "question": "Which term describes the practice of ensuring applications protect against insecure software lifecycle processes?",
      "options": ["Lifecycle protection", "Secure SDLC", "Configuration management", "Version control"],
      "answer": "Lifecycle protection",
      "explanation": "Lifecycle protection ensures security across the entire software lifecycle."
    }
]`