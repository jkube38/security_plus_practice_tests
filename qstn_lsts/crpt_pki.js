export default `[
    {
      "id": "6-001",
      "type": "MCQ",
      "question": "Which term describes the process of converting plaintext into unreadable ciphertext?",
      "options": ["Encryption", "Hashing", "Encoding", "Signing"],
      "answer": "Encryption",
      "explanation": "Encryption protects data confidentiality."
    },
    {
      "id": "6-002",
      "type": "MCQ",
      "question": "Which cryptographic method uses the same key for encryption and decryption?",
      "options": ["Symmetric encryption", "Asymmetric encryption", "Hashing", "Steganography"],
      "answer": "Symmetric encryption",
      "explanation": "Symmetric encryption relies on a shared secret key."
    },
    {
      "id": "6-003",
      "type": "MCQ",
      "question": "Which cryptographic method uses a public and private key pair?",
      "options": ["Asymmetric encryption", "Symmetric encryption", "Hashing", "Obfuscation"],
      "answer": "Asymmetric encryption",
      "explanation": "Asymmetric encryption uses mathematically related key pairs."
    },
    {
      "id": "6-004",
      "type": "MCQ",
      "question": "Which term describes a one-way function that produces a fixed-size output?",
      "options": ["Hashing", "Encryption", "Encoding", "Signing"],
      "answer": "Hashing",
      "explanation": "Hashing ensures integrity by producing unique digests."
    },
    {
      "id": "6-005",
      "type": "MCQ",
      "question": "Which term describes verifying the identity of a sender using cryptographic techniques?",
      "options": ["Digital signature", "Hashing", "Encoding", "Obfuscation"],
      "answer": "Digital signature",
      "explanation": "Digital signatures provide authentication and integrity."
    },
    {
      "id": "6-006",
      "type": "MCQ",
      "question": "Which cryptographic concept ensures that data has not been altered?",
      "options": ["Integrity", "Confidentiality", "Availability", "Obfuscation"],
      "answer": "Integrity",
      "explanation": "Integrity ensures data remains unchanged."
    },
    {
      "id": "6-007",
      "type": "MCQ",
      "question": "Which term describes hiding data within another file?",
      "options": ["Steganography", "Hashing", "Encryption", "Encoding"],
      "answer": "Steganography",
      "explanation": "Steganography conceals data inside images, audio, or other files."
    },
    {
      "id": "6-008",
      "type": "MCQ",
      "question": "Which cryptographic algorithm is commonly used for symmetric encryption?",
      "options": ["AES", "RSA", "ECC", "SHA-256"],
      "answer": "AES",
      "explanation": "AES is the modern standard for symmetric encryption."
    },
    {
      "id": "6-009",
      "type": "MCQ",
      "question": "Which cryptographic algorithm is commonly used for asymmetric encryption?",
      "options": ["RSA", "AES", "SHA-1", "Blowfish"],
      "answer": "RSA",
      "explanation": "RSA is widely used for public-key encryption."
    },
    {
      "id": "6-010",
      "type": "MCQ",
      "question": "Which term describes the process of converting ciphertext back into plaintext?",
      "options": ["Decryption", "Hashing", "Encoding", "Signing"],
      "answer": "Decryption",
      "explanation": "Decryption reverses encryption using a key."
    },
    {
      "id": "6-011",
      "type": "MCQ",
      "question": "Which term describes a trusted entity that issues digital certificates?",
      "options": ["Certificate authority", "Registration authority", "Key escrow", "OCSP responder"],
      "answer": "Certificate authority",
      "explanation": "CAs validate identities and issue certificates."
    },
    {
      "id": "6-012",
      "type": "MCQ",
      "question": "Which protocol checks the revocation status of a certificate in real time?",
      "options": ["OCSP", "CRL", "TLS", "IPSec"],
      "answer": "OCSP",
      "explanation": "OCSP provides real-time certificate status verification."
    },
    {
      "id": "6-013",
      "type": "MCQ",
      "question": "Which term describes a list of revoked certificates published by a CA?",
      "options": ["CRL", "OCSP", "CSR", "PKI"],
      "answer": "CRL",
      "explanation": "Certificate Revocation Lists contain revoked certificate serial numbers."
    },
    {
      "id": "6-014",
      "type": "MCQ",
      "question": "Which term describes a request sent to a CA to obtain a certificate?",
      "options": ["CSR", "CRL", "OCSP", "PKI"],
      "answer": "CSR",
      "explanation": "Certificate Signing Requests contain public keys and identity information."
    },
    {
      "id": "6-015",
      "type": "MCQ",
      "question": "Which cryptographic concept ensures that only authorized users can access data?",
      "options": ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
      "answer": "Confidentiality",
      "explanation": "Confidentiality protects data from unauthorized access."
    },
    {
      "id": "6-016",
      "type": "MCQ",
      "question": "Which term describes the inability of a sender to deny sending a message?",
      "options": ["Non-repudiation", "Integrity", "Confidentiality", "Obfuscation"],
      "answer": "Non-repudiation",
      "explanation": "Digital signatures provide non-repudiation."
    },
    {
      "id": "6-017",
      "type": "MCQ",
      "question": "Which cryptographic algorithm is commonly used for hashing?",
      "options": ["SHA-256", "AES", "RSA", "ECC"],
      "answer": "SHA-256",
      "explanation": "SHA-256 produces a 256-bit hash value."
    },
    {
      "id": "6-018",
      "type": "MCQ",
      "question": "Which term describes a mathematical trapdoor function used in cryptography?",
      "options": ["One-way function", "Symmetric key", "Nonce", "Salt"],
      "answer": "One-way function",
      "explanation": "One-way functions are easy to compute but hard to reverse."
    },
    {
      "id": "6-019",
      "type": "MCQ",
      "question": "Which term describes random data added to a password before hashing?",
      "options": ["Salt", "Nonce", "Key", "Digest"],
      "answer": "Salt",
      "explanation": "Salts prevent attackers from using precomputed hash tables."
    },
    {
      "id": "6-020",
      "type": "MCQ",
      "question": "Which term describes a number used once in cryptographic operations?",
      "options": ["Nonce", "Salt", "Key", "Digest"],
      "answer": "Nonce",
      "explanation": "Nonces ensure uniqueness in cryptographic processes."
    },
    {
      "id": "6-021",
      "type": "MCQ",
      "question": "Which term describes a cryptographic key that is stored offline for security?",
      "options": ["Cold key", "Hot key", "Session key", "Ephemeral key"],
      "answer": "Cold key",
      "explanation": "Cold keys are stored offline to reduce exposure."
    },
    {
      "id": "6-022",
      "type": "MCQ",
      "question": "Which term describes a temporary key used for a single session?",
      "options": ["Session key", "Private key", "Public key", "Root key"],
      "answer": "Session key",
      "explanation": "Session keys are used for one communication session."
    },
    {
      "id": "6-023",
      "type": "MCQ",
      "question": "Which cryptographic concept ensures that data cannot be read even if intercepted?",
      "options": ["Confidentiality", "Integrity", "Non-repudiation", "Obfuscation"],
      "answer": "Confidentiality",
      "explanation": "Confidentiality protects data from unauthorized access."
    },
    {
      "id": "6-024",
      "type": "MCQ",
      "question": "Which term describes a cryptographic key that is generated for short-term use?",
      "options": ["Ephemeral key", "Static key", "Root key", "Master key"],
      "answer": "Ephemeral key",
      "explanation": "Ephemeral keys are temporary and used in protocols like TLS."
    },
    {
      "id": "6-025",
      "type": "MCQ",
      "question": "Which cryptographic algorithm is commonly used for modern public-key encryption?",
      "options": ["ECC", "AES", "SHA-256", "Blowfish"],
      "answer": "ECC",
      "explanation": "Elliptic Curve Cryptography provides strong security with smaller keys."
    },
    {
      "id": "6-026",
      "type": "MCQ",
      "question": "Which term describes a cryptographic attack that attempts to find two inputs with the same hash?",
      "options": ["Collision attack", "Brute-force attack", "Replay attack", "Side-channel attack"],
      "answer": "Collision attack",
      "explanation": "Collision attacks target hashing algorithms."
    },
    {
      "id": "6-027",
      "type": "MCQ",
      "question": "Which term describes a cryptographic attack that attempts to reverse a hash?",
      "options": ["Preimage attack", "Collision attack", "Replay attack", "Side-channel attack"],
      "answer": "Preimage attack",
      "explanation": "Preimage attacks attempt to find an input that produces a given hash."
    },
    {
      "id": "6-028",
      "type": "MCQ",
      "question": "Which term describes a cryptographic attack that uses previously captured data?",
      "options": ["Replay attack", "Brute-force attack", "Collision attack", "Side-channel attack"],
      "answer": "Replay attack",
      "explanation": "Replay attacks reuse captured authentication data."
    },
    {
      "id": "6-029",
      "type": "MCQ",
      "question": "Which term describes a cryptographic attack that exploits physical characteristics of a device?",
      "options": ["Side-channel attack", "Replay attack", "Collision attack", "Brute-force attack"],
      "answer": "Side-channel attack",
      "explanation": "Side-channel attacks analyze power, timing, or electromagnetic leaks."
    },
    {
      "id": "6-030",
      "type": "MCQ",
      "question": "Which term describes a cryptographic key used to encrypt other keys?",
      "options": ["Key encryption key", "Session key", "Root key", "Ephemeral key"],
      "answer": "Key encryption key",
      "explanation": "KEKs protect other keys during storage or transmission."
    },
    {
      "id": "6-031",
      "type": "MCQ",
      "question": "Which term describes a cryptographic key used to derive additional keys?",
      "options": ["Master key", "Session key", "Ephemeral key", "Public key"],
      "answer": "Master key",
      "explanation": "Master keys generate subordinate keys."
    },
    {
      "id": "6-032",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that ensures data authenticity?",
      "options": ["Digital signature", "Hashing", "Encoding", "Obfuscation"],
      "answer": "Digital signature",
      "explanation": "Signatures verify authenticity and integrity."
    },
    {
      "id": "6-033",
      "type": "MCQ",
      "question": "Which protocol provides secure communication over the internet?",
      "options": ["TLS", "FTP", "SMTP", "SNMP"],
      "answer": "TLS",
      "explanation": "Transport Layer Security encrypts web traffic."
    },
    {
      "id": "6-034",
      "type": "MCQ",
      "question": "Which term describes a cryptographic key stored in hardware for added protection?",
      "options": ["Hardware key", "Software key", "Session key", "Ephemeral key"],
      "answer": "Hardware key",
      "explanation": "Hardware keys are stored in secure modules like HSMs."
    },
    {
      "id": "6-035",
      "type": "MCQ",
      "question": "Which term describes a cryptographic module that securely stores keys?",
      "options": ["HSM", "TPM", "CA", "OCSP responder"],
      "answer": "HSM",
      "explanation": "Hardware Security Modules protect cryptographic keys."
    },
    {
      "id": "6-036",
      "type": "MCQ",
      "question": "Which term describes a cryptographic module built into modern CPUs?",
      "options": ["TPM", "HSM", "CA", "OCSP responder"],
      "answer": "TPM",
      "explanation": "Trusted Platform Modules provide secure key storage."
    },
    {
      "id": "6-037",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that converts data into a different format without security?",
      "options": ["Encoding", "Encryption", "Hashing", "Signing"],
      "answer": "Encoding",
      "explanation": "Encoding changes format but does not provide security."
    },
    {
      "id": "6-038",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that obscures code to make it harder to understand?",
      "options": ["Obfuscation", "Encryption", "Hashing", "Encoding"],
      "answer": "Obfuscation",
      "explanation": "Obfuscation hides implementation details."
    },
    {
      "id": "6-039",
      "type": "MCQ",
      "question": "Which term describes a cryptographic key used by a CA to sign certificates?",
      "options": ["Root key", "Session key", "Ephemeral key", "Master key"],
      "answer": "Root key",
      "explanation": "Root keys sign subordinate CA certificates."
    },
    {
      "id": "6-040",
      "type": "MCQ",
      "question": "Which term describes a certificate used to sign other certificates?",
      "options": ["Intermediate certificate", "Root certificate", "Leaf certificate", "Wildcard certificate"],
      "answer": "Intermediate certificate",
      "explanation": "Intermediate certificates form the chain between root and end-user certificates."
    },
    {
      "id": "6-041",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that derives multiple keys from a single input?",
      "options": ["Key stretching", "Key rotation", "Key escrow", "Key wrapping"],
      "answer": "Key stretching",
      "explanation": "Key stretching strengthens weak keys by expanding them using algorithms like PBKDF2."
    },
    {
      "id": "6-042",
      "type": "MCQ",
      "question": "Which term describes securely storing a copy of encryption keys with a trusted third party?",
      "options": ["Key escrow", "Key wrapping", "Key rotation", "Key derivation"],
      "answer": "Key escrow",
      "explanation": "Key escrow allows recovery of encrypted data if keys are lost."
    },
    {
      "id": "6-043",
      "type": "MCQ",
      "question": "Which term describes encrypting one key using another key?",
      "options": ["Key wrapping", "Key escrow", "Key stretching", "Key rotation"],
      "answer": "Key wrapping",
      "explanation": "Key wrapping protects keys during storage or transmission."
    },
    {
      "id": "6-044",
      "type": "MCQ",
      "question": "Which term describes periodically replacing cryptographic keys?",
      "options": ["Key rotation", "Key wrapping", "Key escrow", "Key derivation"],
      "answer": "Key rotation",
      "explanation": "Key rotation reduces exposure by limiting key lifetime."
    },
    {
      "id": "6-045",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that generates keys from a master key?",
      "options": ["Key derivation", "Key rotation", "Key escrow", "Key wrapping"],
      "answer": "Key derivation",
      "explanation": "Key derivation functions generate multiple keys from a single source."
    },
    {
      "id": "6-046",
      "type": "MCQ",
      "question": "Which protocol provides secure email encryption and signing?",
      "options": ["S/MIME", "TLS", "SSH", "IPSec"],
      "answer": "S/MIME",
      "explanation": "S/MIME uses certificates to secure email communication."
    },
    {
      "id": "6-047",
      "type": "MCQ",
      "question": "Which protocol provides secure file transfer using encryption?",
      "options": ["SFTP", "FTP", "SMTP", "SNMP"],
      "answer": "SFTP",
      "explanation": "SFTP encrypts file transfers using SSH."
    },
    {
      "id": "6-048",
      "type": "MCQ",
      "question": "Which term describes a cryptographic attack that attempts all possible keys?",
      "options": ["Brute-force attack", "Replay attack", "Side-channel attack", "Collision attack"],
      "answer": "Brute-force attack",
      "explanation": "Brute-force attacks try every possible key until one works."
    },
    {
      "id": "6-049",
      "type": "MCQ",
      "question": "Which term describes a cryptographic attack that exploits weak random number generation?",
      "options": ["Predictable RNG attack", "Replay attack", "Collision attack", "Side-channel attack"],
      "answer": "Predictable RNG attack",
      "explanation": "Weak randomness can compromise cryptographic operations."
    },
    {
      "id": "6-050",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that ensures data is authentic and unchanged?",
      "options": ["Message authentication code", "Hashing", "Encoding", "Obfuscation"],
      "answer": "Message authentication code",
      "explanation": "MACs verify integrity and authenticity using symmetric keys."
    },
    {
      "id": "6-051",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses both hashing and a secret key?",
      "options": ["HMAC", "MAC", "SHA-256", "AES"],
      "answer": "HMAC",
      "explanation": "HMACs combine hashing with a secret key for authentication."
    },
    {
      "id": "6-052",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that produces a unique value for each block of data?",
      "options": ["Block cipher", "Stream cipher", "Hashing", "Encoding"],
      "answer": "Block cipher",
      "explanation": "Block ciphers encrypt fixed-size blocks of data."
    },
    {
      "id": "6-053",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that encrypts data one bit or byte at a time?",
      "options": ["Stream cipher", "Block cipher", "Hashing", "Encoding"],
      "answer": "Stream cipher",
      "explanation": "Stream ciphers encrypt data continuously."
    },
    {
      "id": "6-054",
      "type": "MCQ",
      "question": "Which term describes a cryptographic mode that uses an IV to ensure unique ciphertext?",
      "options": ["CBC", "ECB", "SHA-256", "RSA"],
      "answer": "CBC",
      "explanation": "Cipher Block Chaining uses an IV to prevent identical ciphertext blocks."
    },
    {
      "id": "6-055",
      "type": "MCQ",
      "question": "Which term describes a cryptographic mode that encrypts identical plaintext into identical ciphertext?",
      "options": ["ECB", "CBC", "GCM", "RSA"],
      "answer": "ECB",
      "explanation": "ECB is insecure because identical plaintext produces identical ciphertext."
    },
    {
      "id": "6-056",
      "type": "MCQ",
      "question": "Which term describes a cryptographic mode that provides both encryption and authentication?",
      "options": ["GCM", "ECB", "CBC", "RSA"],
      "answer": "GCM",
      "explanation": "Galois/Counter Mode provides confidentiality and integrity."
    },
    {
      "id": "6-057",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses multiple rounds of encryption?",
      "options": ["Feistel network", "Stream cipher", "Hashing", "Encoding"],
      "answer": "Feistel network",
      "explanation": "Feistel networks are used in block ciphers like DES."
    },
    {
      "id": "6-058",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses a public key to encrypt and a private key to decrypt?",
      "options": ["Asymmetric encryption", "Symmetric encryption", "Hashing", "Encoding"],
      "answer": "Asymmetric encryption",
      "explanation": "Asymmetric encryption uses key pairs for secure communication."
    },
    {
      "id": "6-059",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses a private key to sign and a public key to verify?",
      "options": ["Digital signature", "Hashing", "Encoding", "Obfuscation"],
      "answer": "Digital signature",
      "explanation": "Digital signatures verify authenticity and integrity."
    },
    {
      "id": "6-060",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that ensures encrypted data cannot be decrypted without the correct key?",
      "options": ["Key confidentiality", "Integrity", "Non-repudiation", "Obfuscation"],
      "answer": "Key confidentiality",
      "explanation": "Key confidentiality ensures only authorized users can decrypt data."
    },
    {
      "id": "6-061",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses multiple keys to encrypt data in layers?",
      "options": ["Hybrid encryption", "Key wrapping", "Key rotation", "Encoding"],
      "answer": "Hybrid encryption",
      "explanation": "Hybrid encryption combines symmetric and asymmetric methods."
    },
    {
      "id": "6-062",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses asymmetric encryption to exchange symmetric keys?",
      "options": ["Key exchange", "Key escrow", "Key rotation", "Key derivation"],
      "answer": "Key exchange",
      "explanation": "Key exchange securely shares symmetric keys using public-key cryptography."
    },
    {
      "id": "6-063",
      "type": "MCQ",
      "question": "Which protocol provides secure remote command-line access?",
      "options": ["SSH", "FTP", "SMTP", "SNMP"],
      "answer": "SSH",
      "explanation": "SSH encrypts remote terminal sessions."
    },
    {
      "id": "6-064",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that ensures data is tied to a specific sender?",
      "options": ["Authentication", "Integrity", "Confidentiality", "Obfuscation"],
      "answer": "Authentication",
      "explanation": "Authentication verifies identity."
    },
    {
      "id": "6-065",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that ensures data is available when needed?",
      "options": ["Availability", "Integrity", "Confidentiality", "Non-repudiation"],
      "answer": "Availability",
      "explanation": "Availability ensures authorized users can access data."
    },
    {
      "id": "6-066",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses a public key to verify a digital signature?",
      "options": ["Signature verification", "Hashing", "Encoding", "Obfuscation"],
      "answer": "Signature verification",
      "explanation": "Verification confirms authenticity and integrity."
    },
    {
      "id": "6-067",
      "type": "MCQ",
      "question": "Which protocol provides secure VPN communication?",
      "options": ["IPSec", "FTP", "SMTP", "SNMP"],
      "answer": "IPSec",
      "explanation": "IPSec encrypts network traffic for VPNs."
    },
    {
      "id": "6-068",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses a private key to decrypt data?",
      "options": ["Private key decryption", "Public key encryption", "Hashing", "Encoding"],
      "answer": "Private key decryption",
      "explanation": "Private keys decrypt data encrypted with the public key."
    },
    {
      "id": "6-069",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses a public key to encrypt data?",
      "options": ["Public key encryption", "Private key decryption", "Hashing", "Encoding"],
      "answer": "Public key encryption",
      "explanation": "Public keys encrypt data for secure communication."
    },
    {
      "id": "6-070",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that ensures encrypted data cannot be modified without detection?",
      "options": ["Cipher integrity", "Confidentiality", "Availability", "Obfuscation"],
      "answer": "Cipher integrity",
      "explanation": "Cipher integrity ensures encrypted data remains unchanged."
    },
    {
      "id": "6-071",
      "type": "MCQ",
      "question": "Which protocol provides secure wireless communication?",
      "options": ["WPA3", "FTP", "SMTP", "SNMP"],
      "answer": "WPA3",
      "explanation": "WPA3 improves wireless encryption and authentication."
    },
    {
      "id": "6-072",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses multiple rounds of hashing?",
      "options": ["Hash stretching", "Key rotation", "Encoding", "Obfuscation"],
      "answer": "Hash stretching",
      "explanation": "Hash stretching strengthens weak passwords."
    },
    {
      "id": "6-073",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses a random value to ensure unique encryption?",
      "options": ["Initialization vector", "Salt", "Nonce", "Digest"],
      "answer": "Initialization vector",
      "explanation": "IVs ensure unique ciphertext even with identical plaintext."
    },
    {
      "id": "6-074",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses a random value to ensure unique hashing?",
      "options": ["Salt", "Nonce", "IV", "Digest"],
      "answer": "Salt",
      "explanation": "Salts prevent attackers from using precomputed hash tables."
    },
    {
      "id": "6-075",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses a random value to ensure unique protocol messages?",
      "options": ["Nonce", "Salt", "IV", "Digest"],
      "answer": "Nonce",
      "explanation": "Nonces ensure uniqueness in cryptographic protocols."
    },
    {
      "id": "6-076",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses a certificate to verify identity?",
      "options": ["Certificate-based authentication", "Hashing", "Encoding", "Obfuscation"],
      "answer": "Certificate-based authentication",
      "explanation": "Certificates verify identity using PKI."
    },
    {
      "id": "6-077",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses a certificate to encrypt data?",
      "options": ["Certificate-based encryption", "Hashing", "Encoding", "Obfuscation"],
      "answer": "Certificate-based encryption",
      "explanation": "Certificates contain public keys used for encryption."
    },
    {
      "id": "6-078",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses a certificate to sign data?",
      "options": ["Certificate-based signing", "Hashing", "Encoding", "Obfuscation"],
      "answer": "Certificate-based signing",
      "explanation": "Certificates contain private keys used for signing."
    },
    {
      "id": "6-079",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that uses a certificate to verify signatures?",
      "options": ["Certificate-based verification", "Hashing", "Encoding", "Obfuscation"],
      "answer": "Certificate-based verification",
      "explanation": "Certificates contain public keys used for signature verification."
    },
    {
      "id": "6-080",
      "type": "MCQ",
      "question": "Which protocol provides secure web browsing using certificates?",
      "options": ["HTTPS", "FTP", "SMTP", "SNMP"],
      "answer": "HTTPS",
      "explanation": "HTTPS uses TLS and certificates to secure web traffic."
    },
    {
      "id": "6-081",
      "type": "MCQ",
      "question": "Which term describes a certificate that can secure multiple subdomains?",
      "options": ["Wildcard certificate", "Root certificate", "Intermediate certificate", "Leaf certificate"],
      "answer": "Wildcard certificate",
      "explanation": "Wildcard certificates secure *.domain.com and all subdomains."
    },
    {
      "id": "6-082",
      "type": "MCQ",
      "question": "Which term describes a certificate used for a single fully qualified domain name?",
      "options": ["Single-domain certificate", "Wildcard certificate", "Root certificate", "Intermediate certificate"],
      "answer": "Single-domain certificate",
      "explanation": "Single-domain certificates secure one specific domain."
    },
    {
      "id": "6-083",
      "type": "MCQ",
      "question": "Which term describes a certificate that secures multiple unrelated domains?",
      "options": ["SAN certificate", "Wildcard certificate", "Root certificate", "Leaf certificate"],
      "answer": "SAN certificate",
      "explanation": "Subject Alternative Name certificates secure multiple domains."
    },
    {
      "id": "6-084",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that ensures a certificate is still valid?",
      "options": ["Certificate validation", "Certificate signing", "Certificate issuance", "Certificate rotation"],
      "answer": "Certificate validation",
      "explanation": "Validation checks expiration, revocation, and trust chain."
    },
    {
      "id": "6-085",
      "type": "MCQ",
      "question": "Which term describes the hierarchical structure of trust in PKI?",
      "options": ["Trust chain", "Key chain", "Hash chain", "Signature chain"],
      "answer": "Trust chain",
      "explanation": "Trust chains link root, intermediate, and leaf certificates."
    },
    {
      "id": "6-086",
      "type": "MCQ",
      "question": "Which term describes the top-most certificate authority in a PKI?",
      "options": ["Root CA", "Intermediate CA", "Leaf CA", "Wildcard CA"],
      "answer": "Root CA",
      "explanation": "Root CAs anchor trust for all subordinate certificates."
    },
    {
      "id": "6-087",
      "type": "MCQ",
      "question": "Which term describes a CA that issues certificates on behalf of a root CA?",
      "options": ["Intermediate CA", "Root CA", "Leaf CA", "Wildcard CA"],
      "answer": "Intermediate CA",
      "explanation": "Intermediate CAs distribute trust from the root."
    },
    {
      "id": "6-088",
      "type": "MCQ",
      "question": "Which term describes the certificate installed on end-user systems or servers?",
      "options": ["Leaf certificate", "Root certificate", "Intermediate certificate", "Wildcard certificate"],
      "answer": "Leaf certificate",
      "explanation": "Leaf certificates are used by clients and servers."
    },
    {
      "id": "6-089",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that binds a public key to an identity?",
      "options": ["Certificate issuance", "Certificate revocation", "Certificate validation", "Certificate rotation"],
      "answer": "Certificate issuance",
      "explanation": "Issuance binds identity information to a public key."
    },
    {
      "id": "6-090",
      "type": "MCQ",
      "question": "Which term describes the process of invalidating a certificate before expiration?",
      "options": ["Certificate revocation", "Certificate signing", "Certificate validation", "Certificate rotation"],
      "answer": "Certificate revocation",
      "explanation": "Revocation occurs when certificates are compromised or outdated."
    },
    {
      "id": "6-091",
      "type": "MCQ",
      "question": "Which protocol provides certificate revocation information using downloadable lists?",
      "options": ["CRL", "OCSP", "TLS", "IPSec"],
      "answer": "CRL",
      "explanation": "Certificate Revocation Lists contain revoked certificate serial numbers."
    },
    {
      "id": "6-092",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that ensures a certificate has not been tampered with?",
      "options": ["Certificate integrity", "Certificate rotation", "Certificate escrow", "Certificate chaining"],
      "answer": "Certificate integrity",
      "explanation": "Integrity ensures certificates remain unchanged."
    },
    {
      "id": "6-093",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that ensures certificates are replaced periodically?",
      "options": ["Certificate rotation", "Certificate revocation", "Certificate validation", "Certificate issuance"],
      "answer": "Certificate rotation",
      "explanation": "Rotation reduces exposure by limiting certificate lifetime."
    },
    {
      "id": "6-094",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that ensures certificates are stored securely?",
      "options": ["Certificate storage", "Certificate rotation", "Certificate validation", "Certificate issuance"],
      "answer": "Certificate storage",
      "explanation": "Secure storage protects certificates from compromise."
    },
    {
      "id": "6-095",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that ensures certificates are backed up securely?",
      "options": ["Certificate backup", "Certificate rotation", "Certificate validation", "Certificate issuance"],
      "answer": "Certificate backup",
      "explanation": "Backups protect certificates from loss."
    },
    {
      "id": "6-096",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that ensures certificates are restored securely?",
      "options": ["Certificate recovery", "Certificate rotation", "Certificate validation", "Certificate issuance"],
      "answer": "Certificate recovery",
      "explanation": "Recovery restores certificates after loss or corruption."
    },
    {
      "id": "6-097",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that ensures certificates are distributed securely?",
      "options": ["Certificate distribution", "Certificate rotation", "Certificate validation", "Certificate issuance"],
      "answer": "Certificate distribution",
      "explanation": "Distribution ensures certificates reach authorized systems."
    },
    {
      "id": "6-098",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that ensures certificates are used correctly by applications?",
      "options": ["Certificate enforcement", "Certificate rotation", "Certificate validation", "Certificate issuance"],
      "answer": "Certificate enforcement",
      "explanation": "Enforcement ensures applications follow certificate policies."
    },
    {
      "id": "6-099",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that ensures certificates meet organizational policies?",
      "options": ["Certificate compliance", "Certificate rotation", "Certificate validation", "Certificate issuance"],
      "answer": "Certificate compliance",
      "explanation": "Compliance ensures certificates follow internal standards."
    },
    {
      "id": "6-100",
      "type": "MCQ",
      "question": "Which term describes a cryptographic process that ensures certificates are monitored for misuse?",
      "options": ["Certificate monitoring", "Certificate rotation", "Certificate validation", "Certificate issuance"],
      "answer": "Certificate monitoring",
      "explanation": "Monitoring detects suspicious certificate activity."
    }
]`