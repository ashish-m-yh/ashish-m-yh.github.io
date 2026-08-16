/**
 * PII Cloak - Main JavaScript
 * Handles modal interactions, navigation, API examples, and live demo functionality
 */

/* ========================================
   API EXAMPLES DATA & CODE SAMPLES
   ======================================== */
const sampleResponse = [
  { "word": "ashish@ybl", "entity_group": "UPI" },
  { "entity_group": "GIVENNAME", "score": "0.9939406", "word": "Ashish" },
  { "entity_group": "TELEPHONENUM", "score": "0.9999077", "word": "+91-8800199037" }
];

const exampleCode = {
  "JavaScript": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PII Cloak API Example</title>
</head>
<body>
    <h1>API Test Output</h1>
    <div id="output">Processing request...</div>

    <script>
        async function verifyPIIData(textContent) {
            const url = "https://ashish-m-pii-detector.hf.space/pii-check";
            const outputDiv = document.getElementById("output");
            
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({ text: textContent })
                });

                if (!response.ok) {
                    throw new Error(\`HTTP error! status: \${response.status}\`);
                }

                const data = await response.json();
                outputDiv.style.color = "#a7f3d0";
                outputDiv.textContent = JSON.stringify(data, null, 2);
                console.log("Redaction Data:", data);
            } catch (error) {
                outputDiv.style.color = "#f87171";
                outputDiv.textContent = "Error running PII check: " + error.message;
                console.error("Failed to run PII check:", error);
            }
        }

        // Run automatically when the page loads
        window.addEventListener("DOMContentLoaded", () => {
            const rawText = "my name is Ashish and reach me at +91-8800199037 and pay at ashish@ybl";
            verifyPIIData(rawText);
        });
    <\/script>
</body>
</html>`,

  "cURL": `curl --request POST \\
  --url https://ashish-m-pii-detector.hf.space/pii-check \\
  --header 'Content-Type: application/json' \\
  --header 'Accept: application/json' \\
  --data '{
    "text": "my name is Ashish and reach me at +91-8800199037 and pay at ashish@ybl"
  }'`,

  "Python": `import requests
import json
import sys

def check_pii(text_content):
    url = "https://ashish-m-pii-detector.hf.space/pii-check"
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    payload = {
        "text": text_content
    }

    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"API Request Failed: {e}", file=sys.stderr)
        return None

if __name__ == "__main__":
    sample_text = "my name is Ashish and reach me at +91-8800199037 and pay at ashish@ybl"
    result = check_pii(sample_text)
    if result:
        print(json.dumps(result, indent=4))`,

  "PHP": `<?php

function scanPII($text) {
    $url = 'https://ashish-m-pii-detector.hf.space/pii-check';
    
    $payload = json_encode([
        'text' => $text
    ]);

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'Content-Length: ' . strlen($payload)
    ]);

    $response = curl_exec($ch);
    
    if (curl_errno($ch)) {
        $error_msg = curl_error($ch);
        curl_close($ch);
        throw new Exception("Curl error: " . $error_msg);
    }

    curl_close($ch);
    return json_decode($response, true);
}

try {
    $sampleText = "my name is Ashish and reach me at +91-8800199037 and pay at ashish@ybl";
    $result = scanPII($sampleText);
    print_r($result);
} catch (Exception $e) {
    echo 'Error: ' . $e->getMessage();
}`,

  "Java": `import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class PiiDetectorClient {

    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();
        
        String jsonPayload = "{\\"text\\":\\"my name is Ashish and reach me at +91-8800199037 and pay at ashish@ybl\\"}";
        
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://ashish-m-pii-detector.hf.space/pii-check"))
                .header("Content-Type", "application/json")
                .header("Accept", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(jsonPayload))
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            
            if (response.statusCode() >= 200 && response.statusCode() < 300) {
                System.out.println("Status Code: " + response.statusCode());
                System.out.println("Response Body:\\n" + response.body());
            } else {
                System.err.println("Server returned error status: " + response.statusCode());
            }
        } catch (IOException | InterruptedException e) {
            System.err.println("Exception occurred while sending request: " + e.getMessage());
            e.printStackTrace();
        }
    }
}`,

  "Ruby": `require 'net/http'
require 'uri'
require 'json'

def check_pii_content(text_to_scan)
  uri = URI.parse("https://ashish-m-pii-detector.hf.space/pii-check")
  
  header = {
    'Content-Type' => 'application/json',
    'Accept' => 'application/json'
  }
  
  payload = {
    text: text_to_scan
  }

  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true if uri.scheme == 'https'

  request = Net::HTTP::Post.new(uri.request_uri, header)
  request.body = payload.to_json

  begin
    response = http.request(request)
    if response.code.to_i == 200
      puts "Success:"
      puts JSON.pretty_generate(JSON.parse(response.body))
    else
      puts "Server Error: #{response.code} - #{response.message}"
    end
  rescue StandardError => e
    puts "An error occurred: #{e.message}"
  end
end

sample_input = "my name is Ashish and reach me at +91-8800199037 and pay at ashish@ybl"
check_pii_content(sample_input)`
};

/* ========================================
   CODE EXAMPLE SELECTOR & DISPLAY
   ======================================== */
document.addEventListener('DOMContentLoaded', function () {
  const langSelector = document.getElementById('lang');
  const codeDisplay = document.getElementById('code');
  const responseDisplay = document.getElementById('response-box');

  /**
   * Update code and response display based on selected language
   */
  function updateCodeDisplay() {
    codeDisplay.textContent = exampleCode[langSelector.value];
    responseDisplay.textContent = JSON.stringify(sampleResponse, null, 2);
  }

  // Event listener for language selection change
  langSelector.addEventListener('change', updateCodeDisplay);

  // Initialize with default selection
  updateCodeDisplay();
});

let copyFeedbackTimer;

/**
 * Copy the code snippet and confirm whether the operation succeeded.
 */
async function copyCode() {
  const codeDisplay = document.getElementById('code');
  const copyButton = document.getElementById('copy-code-button');
  const copyStatus = document.getElementById('copy-status');

  clearTimeout(copyFeedbackTimer);
  copyButton.classList.remove('is-copied', 'has-error');

  try {
    await navigator.clipboard.writeText(codeDisplay.textContent);
    copyButton.textContent = 'Copied';
    copyButton.classList.add('is-copied');
    copyStatus.textContent = 'Code copied to clipboard.';
  } catch (error) {
    copyButton.textContent = 'Copy failed';
    copyButton.classList.add('has-error');
    copyStatus.textContent = 'Code could not be copied. Please try again.';
  }

  copyFeedbackTimer = setTimeout(() => {
    copyButton.textContent = 'Copy';
    copyButton.classList.remove('is-copied', 'has-error');
    copyStatus.textContent = '';
  }, 2000);
}

/* ========================================
   DEMO MODAL FUNCTIONS
   ======================================== */

/**
 * Open the interactive demo modal
 */
function openDemo() {
  const modal = document.getElementById('demoModal');
  const input = document.getElementById('demoInput');
  const responseArea = document.getElementById('demoResponseArea');

  modal.style.display = 'flex';
  input.value = "my name is Ashish and reach me at +91-8800199037 and pay at ashish@ybl";
  responseArea.style.display = 'none';
}

/**
 * Close the interactive demo modal
 */
function closeDemo() {
  document.getElementById('demoModal').style.display = 'none';
}

/**
 * Close modal when clicking on the overlay (background)
 */
function closeDemoOnOverlay(event) {
  if (event.target.id === 'demoModal') {
    closeDemo();
  }
}

/* ========================================
   MOBILE & TABLET NAVIGATION
   ======================================== */
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const primaryNavigation = document.getElementById('primary-navigation');
const responsiveMenuBreakpoint = 1080;

/**
 * Open mobile navigation menu
 */
function openMenu() {
  primaryNavigation.classList.add('is-open');
  document.body.classList.add('menu-open');
  menuToggle.setAttribute('aria-expanded', 'true');
  menuClose.focus();
}

/**
 * Close mobile navigation menu
 */
function closeMenu() {
  primaryNavigation.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.focus();
}

// Event listeners for menu toggle buttons
menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

// Close menu when a navigation link is clicked
primaryNavigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close menu when Escape key is pressed
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && primaryNavigation.classList.contains('is-open')) {
    closeMenu();
  }

  if (event.key === 'Tab' && primaryNavigation.classList.contains('is-open')) {
    const focusableElements = primaryNavigation.querySelectorAll('a, button:not([disabled])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
});

// Close menu on window resize if screen is large enough
window.addEventListener('resize', () => {
  if (window.innerWidth > responsiveMenuBreakpoint && primaryNavigation.classList.contains('is-open')) {
    primaryNavigation.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

/* ========================================
   LIVE API DEMO FUNCTIONALITY
   ======================================== */

/**
 * Run the live API demo with user-provided text
 */
async function runLiveDemo() {
  const inputText = document.getElementById('demoInput').value;
  const responseArea = document.getElementById('demoResponseArea');
  const responseBox = document.getElementById('demoResponseBox');
  const submitBtn = document.getElementById('submitDemoBtn');

  // Validate input
  if (!inputText.trim()) {
    alert("Please enter some text to check.");
    return;
  }

  // Update UI to show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = "Analyzing...";
  responseArea.style.display = 'block';
  responseBox.style.color = '#94a3b8';
  responseBox.style.borderColor = '#334155';
  responseBox.textContent = "Connecting to API endpoint...";

  try {
    // Call the PII detection API
    const response = await fetch("https://ashish-m-pii-detector.hf.space/pii-check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ text: inputText })
    });

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse and display the response
    const data = await response.json();
    responseBox.style.color = '#34d399';
    responseBox.style.borderColor = '#10b981';
    responseBox.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    // Handle errors
    responseBox.style.color = '#f87171';
    responseBox.style.borderColor = '#ef4444';
    responseBox.textContent = "Error making API call:\n" + error.message;
  } finally {
    // Restore button state
    submitBtn.disabled = false;
    submitBtn.textContent = "Analyze Text";
  }
}
