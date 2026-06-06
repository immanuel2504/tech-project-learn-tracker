const STORAGE_KEY = "learnTracker_v2";

const ADVISOR = {
  trustedQuote: "Let's first understand your problem. Then we'll determine whether our software is the right solution.",
  trustedNote: "Customers trust this approach much more than a product pitch.",
  partnerQuote: "Let's work together to solve your problem.",
  partnerNote: "Solution Architects help create the partner relationship — not a vendor-buyer transaction.",
  howTheyConnect: [
    { step: "Trusted Advisor", desc: "Earn trust by listening first and assessing fit honestly." },
    { step: "Partner Mindset", desc: "Co-own the outcome — work side-by-side through design, build, and rollout." },
    { step: "Together", desc: "Customer sees you as part of their team, not someone selling to them." },
  ],
  partnerBehaviors: [
    "Use \"we\" language — \"Let's map your production flow together\"",
    "Share trade-offs openly — include customer in technology decisions",
    "Align on shared success metrics before the project starts",
    "Be present through implementation — not disappear after the proposal",
    "Advocate for the customer's best interest, even against your own short-term sale",
    "Build long-term relationship — next project, expansion, referral",
  ],
  vendorVsPartner: {
    vendor: [
      "Delivers a quote and waits for sign-off",
      "Owns the solution alone — customer just approves",
      "Success = deal closed",
      "Relationship ends at handover",
    ],
    partner: [
      "Works in workshops, working sessions, and reviews",
      "Co-designs architecture with customer's IT and ops teams",
      "Success = customer's problem actually solved",
      "Relationship continues through delivery and beyond",
    ],
  },
  vendorApproach: [
    "Jump straight to features and product demo",
    "Assume the customer needs your platform",
    "Lead with technology (MQTT, AI, dashboards)",
    "Push a one-size-fits-all architecture",
    "Customer feels sold to — not heard",
  ],
  advisorApproach: [
    "Start with discovery: pain, goals, constraints, current state",
    "Ask what success looks like before proposing anything",
    "Honestly assess fit — even if answer is \"not our product\"",
    "Co-design the solution with the customer",
    "Customer feels understood — trust goes up",
  ],
  discoverySteps: [
    { step: "1. Listen", q: "What problem are you trying to solve? What triggered this now?" },
    { step: "2. Context", q: "What exists today? What have you already tried? What failed?" },
    { step: "3. Goals", q: "What does success look like in 6–12 months? Who benefits?" },
    { step: "4. Constraints", q: "Budget, timeline, skills, connectivity, compliance, legacy systems?" },
    { step: "5. Fit check", q: "Is our approach the right solution — or is there a simpler path?" },
    { step: "6. Then design", q: "Only now — propose architecture, phases, and trade-offs." },
  ],
  projectDiscovery: {
    foodMfg: [
      "What production problems cost you most — downtime, spoilage, or traceability?",
      "Which machines or lines are hardest to monitor today?",
      "Do you need real-time alerts or end-of-shift reports?",
      "What's your OT/IT boundary — can cloud connect to the plant floor?",
      "Would a smaller pilot on one line be smarter than plant-wide rollout?",
      "Is AI prediction needed now — or are threshold alerts enough for phase 1?",
    ],
    cropAI: [
      "How do farmers detect disease today — visual inspection, lab tests, or guesswork?",
      "Which crops and regions matter most in year one?",
      "What accuracy is \"good enough\" before farmers trust the AI?",
      "Do field agents have smartphones and connectivity?",
      "What happens when the model is wrong — who reviews and corrects?",
      "Is a mobile app needed — or would SMS + agronomist callback work for MVP?",
    ],
  },
};

const PROJECTS = {
  foodMfg: {
    id: "foodMfg",
    name: "Food Mfg IoT",
    shortName: "Food IoT",
    icon: "🏭",
    accent: "#3b9eff",
    tagline: "Smart food manufacturing platform — learn by building",
    visionTitle: "The Scenario",
    vision: "A food manufacturing company needs to digitize operations: track production batches, monitor machine health on the plant floor, predict equipment failures before they cause downtime, and give managers real-time dashboards and reports.",
    goals: [
      { icon: "📦", title: "Track Production", desc: "Batch IDs, line output, SKU counts, shift totals, quality checkpoints." },
      { icon: "⚙️", title: "Monitor Machine Health", desc: "Temperature, vibration, runtime, alarms, OEE basics." },
      { icon: "🤖", title: "Predict Failures (AI)", desc: "Anomaly detection, maintenance alerts, trend-based predictions." },
      { icon: "📊", title: "Dashboard & Reports", desc: "Live KPIs, historical trends, exportable reports for ops teams." },
    ],
    phases: [
      { id: "phase1", name: "Phase 1 — Domain & Problem", desc: "Understand food manufacturing operations and requirements" },
      { id: "phase2", name: "Phase 2 — Edge Gateway", desc: "Build device collection, buffering, and MQTT publish" },
      { id: "phase3", name: "Phase 3 — Data Pipeline", desc: "MQTT broker, API, database, historian concepts" },
      { id: "phase4", name: "Phase 4 — Production Tracking", desc: "Batches, line output, SKU counts, shift reports" },
      { id: "phase5", name: "Phase 5 — Machine Health", desc: "Telemetry, thresholds, OEE basics, alerts" },
      { id: "phase6", name: "Phase 6 — AI Prediction", desc: "Anomaly detection and failure prediction basics" },
      { id: "phase7", name: "Phase 7 — Dashboard", desc: "KPIs, charts, live status, exportable reports" },
      { id: "phase8", name: "Phase 8 — Architecture Portfolio", desc: "Diagrams, ADRs, solution doc for interviews" },
    ],
    defaultTasks: [
      { phase: "phase1", title: "Research food manufacturing lines (filling, packaging, cold storage)", priority: "high", desc: "Learn what machines exist, what data matters, and typical pain points (downtime, spoilage, batch traceability)." },
      { phase: "phase1", title: "Define 4 business goals: production, health, AI, dashboard", priority: "high", desc: "Write 2-3 sentences each for what the company wants to achieve and who uses the system." },
      { phase: "phase1", title: "List key metrics (KPIs) to track", priority: "medium", desc: "Examples: units/hour, batch ID, reject rate, machine uptime, temperature, vibration, OEE." },
      { phase: "phase1", title: "Map stakeholders: ops manager, maintenance, IT, quality", priority: "low", desc: "Who needs the dashboard? Who gets alerts? Who configures the gateway?" },
      { phase: "phase1", title: "Practice trusted advisor discovery (don't pitch solution first)", priority: "high", desc: "Read Trusted Advisor section. Before drawing architecture, write 10 discovery questions for the food company. See if IoT is even the right answer." },
      { phase: "phase1", title: "Write \"fit check\" note — is a full IoT platform needed?", priority: "high", desc: "Honestly list: what problems need MQTT/edge/AI vs what could be solved with spreadsheets, existing SCADA, or a simpler pilot." },
      { phase: "phase1", title: "Practice partner mindset — draft a \"let's work together\" opening", priority: "medium", desc: "Write how you'd open a workshop with the food company using \"we\" language. Read Partner Mindset in Advisor section." },
      { phase: "phase2", title: "Study what an edge gateway does", priority: "high", desc: "Collect, normalize, buffer, secure, forward. Read the architecture section in this app." },
      { phase: "phase2", title: "Set up Python project for edge gateway", priority: "high", desc: "Create folder structure: config.yaml, main.py, device_reader.py, buffer.py, mqtt_publisher.py" },
      { phase: "phase2", title: "Build device simulator (temperature, speed, status)", priority: "high", desc: "Simulate a filling machine sending JSON telemetry every 5 seconds." },
      { phase: "phase2", title: "Add SQLite offline buffer", priority: "medium", desc: "When MQTT is down, store messages locally and flush when connection returns." },
      { phase: "phase2", title: "Publish to MQTT broker (Mosquitto)", priority: "high", desc: "Install Mosquitto locally. Publish to plant/foodco/line1/filler/telemetry" },
      { phase: "phase2", title: "Add TLS certificates to MQTT connection", priority: "medium", desc: "Practice cert-based auth — same concepts as Zebra RFID and industrial IoT." },
      { phase: "phase3", title: "Design MQTT topic structure", priority: "high", desc: "Use plant/site/line/device/type pattern. Document in notes." },
      { phase: "phase3", title: "Define JSON schema for telemetry payload", priority: "high", desc: "device_id, timestamp, metrics{}, site_id, batch_id (optional)" },
      { phase: "phase3", title: "Learn REST API basics for production data", priority: "medium", desc: "POST /batches, GET /production/summary — use Python Flask or FastAPI." },
      { phase: "phase3", title: "Understand historian / time-series storage", priority: "medium", desc: "Why machine metrics need time-series DB (vs regular SQL). Research InfluxDB or TimescaleDB." },
      { phase: "phase4", title: "Model a production batch lifecycle", priority: "high", desc: "Started → in progress → completed / rejected. What events are emitted?" },
      { phase: "phase4", title: "Track units produced per shift", priority: "medium", desc: "Counter from conveyor or filler machine. Aggregate by shift (morning/evening/night)." },
      { phase: "phase4", title: "Add batch ID to telemetry payloads", priority: "medium", desc: "Link machine data to a specific production batch for traceability." },
      { phase: "phase4", title: "Build production summary report structure", priority: "low", desc: "What would ops manager see at end of shift? Units, downtime, reject rate." },
      { phase: "phase5", title: "Define machine health metrics", priority: "high", desc: "Temperature, vibration, motor current, runtime hours, error codes." },
      { phase: "phase5", title: "Implement threshold alerts", priority: "high", desc: "If cold storage temp > 8°C → emit event to plant/foodco/coldstorage/events" },
      { phase: "phase5", title: "Learn OEE basics (Availability, Performance, Quality)", priority: "medium", desc: "Standard manufacturing KPI. Write a note explaining each component." },
      { phase: "phase5", title: "Design machine status states", priority: "medium", desc: "Running, idle, fault, maintenance. How does dashboard show each?" },
      { phase: "phase6", title: "Start with rule-based alerts before ML", priority: "high", desc: "Moving average, rate-of-change, threshold bands — simpler and often enough." },
      { phase: "phase6", title: "Learn anomaly detection concepts", priority: "medium", desc: "What is normal vs abnormal vibration/temperature pattern? Research isolation forest or z-score." },
      { phase: "phase6", title: "Prototype simple prediction in Python", priority: "medium", desc: "Use scikit-learn on simulated sensor data. Flag anomalies → publish to plant/foodco/ai/prediction/alert" },
      { phase: "phase6", title: "Document AI feature for stakeholders", priority: "low", desc: "Explain in plain language: what it predicts, confidence, recommended action." },
      { phase: "phase7", title: "Sketch dashboard wireframe", priority: "high", desc: "Panels: production today, machine status, active alerts, AI predictions, trend charts." },
      { phase: "phase7", title: "Build simple HTML dashboard (or Grafana)", priority: "medium", desc: "Even a static mockup with sample data helps you think like a PM/SA." },
      { phase: "phase7", title: "Connect dashboard to API or MQTT", priority: "medium", desc: "Live or simulated data feeding charts." },
      { phase: "phase7", title: "Design shift report export (PDF/CSV)", priority: "low", desc: "What does the ops manager email at end of day?" },
      { phase: "phase8", title: "Draw end-to-end architecture diagram", priority: "high", desc: "Plant → gateway → MQTT → API/historian/AI → dashboard. Use draw.io or Mermaid." },
      { phase: "phase8", title: "Write 1 Architecture Decision Record (ADR)", priority: "high", desc: "Example: Why MQTT for telemetry instead of REST polling?" },
      { phase: "phase8", title: "Write 1-page solution overview document", priority: "high", desc: "As if presenting to the food company IT manager. Problem, solution, components, benefits." },
      { phase: "phase8", title: "Prepare 5-min presentation of the project", priority: "medium", desc: "Practice explaining trade-offs — good for PO, TPM, or SA interviews." },
    ],
    glossary: [
      { term: "Edge Gateway", def: "Hardware/software on the plant floor that collects device data, processes it locally, and forwards to cloud systems." },
      { term: "MQTT", def: "Lightweight messaging protocol for IoT. Devices publish to topics; subscribers receive messages. Ideal for telemetry." },
      { term: "Telemetry", def: "Periodic measurements sent from devices — temperature, speed, counts, status." },
      { term: "Historian", def: "Time-series database storing machine metrics over time for trends and analysis." },
      { term: "OEE", def: "Overall Equipment Effectiveness = Availability × Performance × Quality. Key manufacturing KPI." },
      { term: "Batch Traceability", def: "Ability to track a production batch from raw materials through filling, packaging, and storage." },
      { term: "Modbus", def: "Industrial protocol used by PLCs and machines. Edge gateway often reads Modbus registers." },
      { term: "OPC-UA", def: "Modern industrial communication standard for machine data exchange." },
      { term: "Anomaly Detection", def: "Identifying unusual patterns in sensor data that may indicate impending failure." },
      { term: "ADR", def: "Architecture Decision Record — documents why a technical choice was made." },
      { term: "QoS (MQTT)", def: "Quality of Service level 0/1/2 — controls message delivery guarantee." },
      { term: "OT / IT", def: "Operational Technology (plant floor) vs Information Technology (enterprise systems). Edge gateway bridges both." },
      { term: "Trusted Advisor", def: "Approach where you understand the customer's problem first, then honestly assess whether your solution fits — before proposing architecture or products." },
      { term: "Discovery", def: "Structured questioning phase before solution design: pain points, goals, constraints, current state, and success criteria." },
      { term: "Partner Mindset", def: "Treating the customer as a collaborator — \"let's work together to solve your problem\" — not a buyer to sell to. Solution Architects build this relationship." },
    ],
    architecture: {
      subtitle: "Reference design for the food manufacturing IoT platform",
      diagram: `┌─────────────────────────────────────────────────────────────────┐
│                    FOOD MANUFACTURING PLANT                      │
│                                                                  │
│  [Filling Line]  [Packaging]  [Cold Storage]  [Conveyor Motors] │
│        │              │              │                │          │
│        └──────────────┴──────────────┴────────────────┘          │
│                              │                                   │
│                    ┌─────────▼─────────┐                         │
│                    │   EDGE GATEWAY    │                         │
│                    │  • Collect (Modbus)│                         │
│                    │  • Normalize JSON  │                         │
│                    │  • Buffer offline  │                         │
│                    │  • Edge alerts     │                         │
│                    └─────────┬─────────┘                         │
└──────────────────────────────┼───────────────────────────────────┘
                               │ MQTT / HTTPS (TLS)
                    ┌──────────▼──────────┐
                    │    MQTT BROKER      │
                    │   (Mosquitto/EMQX)  │
                    └──────────┬──────────┘
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
   ┌──────▼──────┐    ┌────────▼────────┐   ┌──────▼──────┐
   │  Historian  │    │   REST API      │   │  AI Service │
   │ (time-series│    │  (production    │   │  (anomaly   │
   │   data)     │    │   & health)     │   │  detection) │
   └──────┬──────┘    └────────┬────────┘   └──────┬──────┘
          │                    │                    │
          └────────────────────┼────────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │     DASHBOARD       │
                    │  • Production KPIs  │
                    │  • Machine health   │
                    │  • AI alerts        │
                    │  • Reports          │
                    └─────────────────────┘`,
      components: [
        { title: "1. Edge Gateway", desc: "Reads PLC/sensor data on the plant floor. Converts to standard JSON. Buffers when network drops. Runs local rules (e.g. freezer temp > 8°C → alert).", tags: ["Python", "Modbus", "MQTT"] },
        { title: "2. Data Pipeline", desc: "MQTT topics carry telemetry and events. API stores production batches. Historian keeps machine metrics over time.", tags: ["MQTT", "REST", "PostgreSQL"] },
        { title: "3. AI / Prediction", desc: "Start simple: threshold alerts → moving averages → anomaly detection on vibration/temperature patterns.", tags: ["Python", "scikit-learn"] },
        { title: "4. Dashboard", desc: "Ops managers see live production, machine status, and predicted failures. Shift reports exportable.", tags: ["Charts", "KPIs"] },
      ],
      extraTitle: "MQTT Topic Structure (example)",
      extraLines: [
        "plant/foodco/line1/filler/telemetry",
        "plant/foodco/line1/filler/events",
        "plant/foodco/line1/packager/telemetry",
        "plant/foodco/production/batch/started",
        "plant/foodco/ai/prediction/alert",
        "plant/foodco/gateway/status",
      ],
    },
    glossarySubtitle: "Key terms for food manufacturing IoT",
  },

  cropAI: {
    id: "cropAI",
    name: "Crop Disease AI",
    shortName: "Crop AI",
    icon: "🌾",
    accent: "#34d399",
    tagline: "AI-powered crop disease detection — learn by building",
    visionTitle: "The Scenario",
    vision: "An agricultural organization needs an AI system to detect crop diseases early. Farmers photograph affected leaves in the field; the system classifies the disease, alerts agronomists, tracks outbreaks across regions, and provides treatment guidance — reducing yield loss and pesticide misuse.",
    goals: [
      { icon: "📷", title: "Capture Images", desc: "Mobile/web upload of crop leaf photos with location and crop metadata." },
      { icon: "🧠", title: "AI Classification", desc: "CNN model identifies disease type, confidence score, and severity." },
      { icon: "🔔", title: "Alerts & Guidance", desc: "Notify farmers and agronomists; suggest treatment actions." },
      { icon: "🗺️", title: "Dashboard & Reports", desc: "Disease map, outbreak trends, field history, exportable reports." },
    ],
    phases: [
      { id: "phase1", name: "Phase 1 — Domain & Problem", desc: "Understand agriculture, crop diseases, and user needs" },
      { id: "phase2", name: "Phase 2 — Dataset & ML Basics", desc: "Explore datasets, image classification, CNN concepts" },
      { id: "phase3", name: "Phase 3 — Train Model", desc: "Transfer learning, training, evaluation, accuracy metrics" },
      { id: "phase4", name: "Phase 4 — API & Inference", desc: "FastAPI service — upload image, return prediction" },
      { id: "phase5", name: "Phase 5 — Storage & Database", desc: "Image storage, detection records, metadata" },
      { id: "phase6", name: "Phase 6 — Alerts & Workflow", desc: "Confidence thresholds, notifications, human review" },
      { id: "phase7", name: "Phase 7 — Dashboard", desc: "Disease map, charts, agronomist reports" },
      { id: "phase8", name: "Phase 8 — Architecture Portfolio", desc: "Diagrams, ADRs, solution doc for interviews" },
    ],
    defaultTasks: [
      { phase: "phase1", title: "Research common crop diseases (tomato, rice, wheat, potato)", priority: "high", desc: "Learn disease names, visual symptoms, and economic impact. Examples: early blight, leaf rust, bacterial spot." },
      { phase: "phase1", title: "Define users: farmer, field agent, agronomist, ops manager", priority: "high", desc: "Who uploads images? Who reviews low-confidence results? Who sees the dashboard?" },
      { phase: "phase1", title: "Write problem statement for the client", priority: "high", desc: "\"We need an AI system for crop disease detection\" — expand into goals, constraints, success metrics." },
      { phase: "phase1", title: "List success metrics (accuracy, response time, coverage)", priority: "medium", desc: "e.g. >85% accuracy on test set, <3 sec inference, support 5 crop types in v1." },
      { phase: "phase1", title: "Note rural constraints: low bandwidth, offline fields", priority: "low", desc: "How does poor connectivity affect upload? Consider offline queue on mobile." },
      { phase: "phase1", title: "Practice trusted advisor discovery (don't pitch AI first)", priority: "high", desc: "Read Trusted Advisor section. Before building a model, write 10 discovery questions for the agri client. Ask if AI is even needed for their scale." },
      { phase: "phase1", title: "Write \"fit check\" note — is AI the right solution?", priority: "high", desc: "Honestly list: what problems need ML vs what could be solved with agronomist hotline, SMS alerts, or manual field surveys first." },
      { phase: "phase1", title: "Practice partner mindset — draft a \"let's work together\" opening", priority: "medium", desc: "Write how you'd open a workshop with the agri client using \"we\" language. Include farmers and field agents as partners in design." },

      { phase: "phase2", title: "Learn image classification basics", priority: "high", desc: "How CNNs work at a high level: conv layers, pooling, softmax output. Watch one beginner video or read a summary." },
      { phase: "phase2", title: "Download PlantVillage dataset", priority: "high", desc: "Public benchmark dataset with 50k+ labeled leaf images. Explore folder structure in Jupyter." },
      { phase: "phase2", title: "Explore dataset in Jupyter notebook", priority: "high", desc: "Count images per class, display sample images, note class imbalance." },
      { phase: "phase2", title: "Understand transfer learning concept", priority: "high", desc: "Why start from MobileNet/ResNet instead of training from scratch. Write a note." },
      { phase: "phase2", title: "Learn train/validation/test split", priority: "medium", desc: "Why we split data. Typical 70/15/15 or 80/10/10. Avoid data leakage." },
      { phase: "phase2", title: "Study evaluation metrics: accuracy, precision, recall, F1", priority: "medium", desc: "Accuracy alone can mislead with imbalanced classes. Document each metric." },

      { phase: "phase3", title: "Set up Python ML environment", priority: "high", desc: "venv + tensorflow or pytorch + jupyter + matplotlib. requirements.txt" },
      { phase: "phase3", title: "Build data preprocessing pipeline", priority: "high", desc: "Resize images (224x224), normalize pixels, label encoding, augmentation (flip, rotate)." },
      { phase: "phase3", title: "Train baseline model on one crop (e.g. tomato)", priority: "high", desc: "Transfer learning with MobileNetV2. Target: working classifier with printed accuracy." },
      { phase: "phase3", title: "Evaluate model on test set", priority: "high", desc: "Confusion matrix, per-class accuracy. Which diseases get confused?" },
      { phase: "phase3", title: "Save trained model (model.h5 or .pt)", priority: "medium", desc: "Export for inference API. Note model version and training date." },
      { phase: "phase3", title: "Test with your own leaf photo", priority: "medium", desc: "Take or download a test image not in dataset. Does prediction make sense?" },

      { phase: "phase4", title: "Design detect API contract", priority: "high", desc: "POST /api/v1/detect — input: image file + crop + field_id. Output: disease, confidence, severity." },
      { phase: "phase4", title: "Build FastAPI inference service", priority: "high", desc: "Load saved model, accept image upload, return JSON prediction." },
      { phase: "phase4", title: "Add image validation (size, format)", priority: "medium", desc: "Reject invalid files. Max 5MB, jpg/png only." },
      { phase: "phase4", title: "Add confidence threshold logic", priority: "medium", desc: "If confidence < 70%, return status: needs_human_review" },
      { phase: "phase4", title: "Test API with curl or Postman", priority: "high", desc: "curl -X POST -F image=@leaf.jpg -F crop=tomato http://localhost:8000/api/v1/detect" },
      { phase: "phase4", title: "Document API (OpenAPI / Swagger)", priority: "low", desc: "FastAPI auto-generates /docs — add descriptions to match your TW skills." },

      { phase: "phase5", title: "Design detection record schema", priority: "high", desc: "id, image_url, crop, disease, confidence, field_id, lat, lng, farmer_id, timestamp, reviewed" },
      { phase: "phase5", title: "Set up SQLite or PostgreSQL database", priority: "high", desc: "Store every detection result linked to metadata." },
      { phase: "phase5", title: "Implement image file storage", priority: "medium", desc: "Local uploads/ folder first. Later: S3 or Azure Blob." },
      { phase: "phase5", title: "Connect API to DB on each detection", priority: "high", desc: "After inference, save record + image path to database." },
      { phase: "phase5", title: "Build GET /detections endpoint", priority: "medium", desc: "List recent detections with filters: crop, disease, date range, field." },

      { phase: "phase6", title: "Define alert rules", priority: "high", desc: "High confidence + severe disease → immediate alert. Medium → queue for agronomist." },
      { phase: "phase6", title: "Design treatment recommendation lookup", priority: "medium", desc: "Simple JSON map: disease → recommended action, pesticide note, urgency." },
      { phase: "phase6", title: "Add human review workflow", priority: "medium", desc: "Agronomist can confirm or correct AI label. Corrections feed future retraining." },
      { phase: "phase6", title: "Prototype notification (email or log)", priority: "low", desc: "Even logging \"ALERT: Early Blight in Field F-102\" is enough for MVP." },

      { phase: "phase7", title: "Sketch dashboard wireframe", priority: "high", desc: "Panels: detections today, disease breakdown chart, field map, low-confidence queue." },
      { phase: "phase7", title: "Build simple HTML/Streamlit dashboard", priority: "medium", desc: "Charts: detections per disease, confidence distribution, detections over time." },
      { phase: "phase7", title: "Add image upload page (web form)", priority: "medium", desc: "Simple HTML form → calls detect API → shows result + treatment tip." },
      { phase: "phase7", title: "Design regional outbreak report", priority: "low", desc: "What does the agri ops manager export weekly? CSV: field, crop, disease, count." },

      { phase: "phase8", title: "Draw end-to-end architecture diagram", priority: "high", desc: "Field → mobile/web → API → ML → DB/storage → dashboard. Use draw.io or Mermaid." },
      { phase: "phase8", title: "Write 1 ADR (Architecture Decision Record)", priority: "high", desc: "Example: Why transfer learning over custom CNN? Why FastAPI over Flask?" },
      { phase: "phase8", title: "Write 1-page solution overview for client", priority: "high", desc: "Present to agri company: problem, AI approach, components, rollout plan, risks." },
      { phase: "phase8", title: "Prepare 5-min demo walkthrough", priority: "medium", desc: "Upload leaf photo → see prediction → show dashboard. Practice for interviews." },
      { phase: "phase8", title: "List v2 improvements (drone images, multi-language, offline model)", priority: "low", desc: "Shows product thinking beyond MVP — good for TPM interviews." },
    ],
    glossary: [
      { term: "CNN (Convolutional Neural Network)", def: "Deep learning model designed for images. Detects visual patterns like disease spots on leaves." },
      { term: "Transfer Learning", def: "Reusing a pre-trained model (e.g. MobileNet) and fine-tuning on your crop disease dataset. Faster and needs less data." },
      { term: "PlantVillage", def: "Public dataset of 50,000+ labeled plant leaf images across crops and diseases. Common ML benchmark." },
      { term: "Inference", def: "Running a trained model on a new image to get a prediction. Done in real-time via API." },
      { term: "Confidence Score", def: "Model's certainty (0–1) about its prediction. Low confidence → flag for human review." },
      { term: "Confusion Matrix", def: "Table showing which diseases the model confuses with each other. Key evaluation tool." },
      { term: "Precision / Recall / F1", def: "Metrics beyond accuracy. Important when some diseases are rare in the dataset." },
      { term: "Data Augmentation", def: "Creating training variations (flip, rotate, zoom) to improve model robustness to real field photos." },
      { term: "FastAPI", def: "Modern Python web framework for building APIs. Auto-generates OpenAPI docs. Ideal for ML inference services." },
      { term: "Model Versioning", def: "Tracking which model version produced which prediction. Critical for production AI systems." },
      { term: "Human-in-the-Loop", def: "Agronomist reviews uncertain predictions and corrects labels — improves future model training." },
      { term: "AgriTech", def: "Technology applied to agriculture — includes precision farming, disease detection, and farm management platforms." },
      { term: "Trusted Advisor", def: "Approach where you understand the customer's problem first, then honestly assess whether your solution fits — before proposing AI or platforms." },
      { term: "Discovery", def: "Structured questioning phase before solution design: pain points, goals, constraints, current state, and success criteria." },
      { term: "Partner Mindset", def: "Treating the customer as a collaborator — \"let's work together to solve your problem\" — not a buyer to sell to. Solution Architects build this relationship." },
    ],
    architecture: {
      subtitle: "Reference design for crop disease detection AI system",
      diagram: `┌─────────────────────────────────────────────────────────────┐
│                      FIELD / FARM                              │
│                                                              │
│  [Farmer Mobile App]   [Web Upload]   [Drone Images]         │
│         │                    │                │              │
│         └────────────────────┴────────────────┘              │
│                              │                               │
│                    ┌─────────▼─────────┐                     │
│                    │  Edge (optional)   │                     │
│                    │  • Resize image    │                     │
│                    │  • Offline queue   │                     │
│                    └─────────┬─────────┘                     │
└──────────────────────────────┼───────────────────────────────┘
                               │ HTTPS (TLS)
                    ┌──────────▼──────────┐
                    │     API Gateway       │
                    │  • JWT Auth           │
                    │  • Image upload       │
                    │  • Validation         │
                    └──────────┬──────────┘
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
   ┌──────▼──────┐    ┌────────▼────────┐   ┌──────▼──────┐
   │  AI Service │    │   Metadata DB   │   │   Image     │
   │  (CNN model)│    │  farms, fields, │   │   Storage   │
   │  inference  │    │  detections     │   │  (S3/local) │
   └──────┬──────┘    └────────┬────────┘   └──────┬──────┘
          │                    │                    │
          └────────────────────┼────────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │  Dashboard / App    │
                    │  • Disease map        │
                    │  • Alerts             │
                    │  • Treatment tips     │
                    │  • Outbreak reports   │
                    └─────────────────────┘`,
      components: [
        { title: "1. Image Capture", desc: "Farmers photograph affected leaves via mobile or web. Metadata: crop type, field ID, GPS location, farmer ID.", tags: ["Mobile", "Web", "JPEG"] },
        { title: "2. AI / ML Service", desc: "CNN model (transfer learning) classifies disease from leaf image. Returns disease name, confidence, severity.", tags: ["TensorFlow", "PyTorch", "FastAPI"] },
        { title: "3. API Layer", desc: "REST API receives images, calls ML service, stores results. JWT auth. Confidence threshold triggers human review.", tags: ["FastAPI", "REST", "JWT"] },
        { title: "4. Dashboard", desc: "Agronomists see disease map, outbreak trends, low-confidence queue. Farmers get treatment guidance.", tags: ["Streamlit", "Charts", "Maps"] },
      ],
      extraTitle: "API Endpoints (example)",
      extraLines: [
        "POST /api/v1/detect          → upload image, get prediction",
        "GET  /api/v1/detections      → list detection history",
        "GET  /api/v1/detections/:id  → single detection detail",
        "POST /api/v1/review/:id      → agronomist confirms/corrects label",
        "GET  /api/v1/reports/outbreak → regional disease summary",
        "GET  /api/v1/health          → service health check",
      ],
    },
    glossarySubtitle: "Key terms for crop disease AI & machine learning",
  },
};

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return ensureAllProjects(JSON.parse(saved));
  } catch (_) {}

  const old = localStorage.getItem("foodMfgIoT_tracker_v1");
  if (old) {
    try {
      const parsed = JSON.parse(old);
      return ensureAllProjects(migrateFromV1(parsed));
    } catch (_) {}
  }

  return createDefaultState();
}

function ensureAllProjects(state) {
  if (!state.projects) state.projects = {};
  Object.keys(PROJECTS).forEach((id) => {
    if (!state.projects[id]) {
      state.projects[id] = {
        tasks: PROJECTS[id].defaultTasks.map((t, i) => ({
          id: id + "_task_" + i,
          ...t,
          done: false,
          createdAt: new Date().toISOString(),
        })),
        notes: [],
      };
    } else {
      mergeMissingTasks(state.projects[id], PROJECTS[id].defaultTasks, id);
    }
  });
  if (!state.currentProject || !PROJECTS[state.currentProject]) {
    state.currentProject = "foodMfg";
  }
  return state;
}

function mergeMissingTasks(projectData, defaultTasks, projectId) {
  const titles = new Set(projectData.tasks.map((t) => t.title));
  defaultTasks.forEach((t, i) => {
    if (!titles.has(t.title)) {
      projectData.tasks.push({
        id: projectId + "_task_" + i + "_m",
        ...t,
        done: false,
        createdAt: new Date().toISOString(),
      });
    }
  });
}

function createDefaultState() {
  const projects = {};
  Object.keys(PROJECTS).forEach((id) => {
    projects[id] = {
      tasks: PROJECTS[id].defaultTasks.map((t, i) => ({
        id: id + "_task_" + i,
        ...t,
        done: false,
        createdAt: new Date().toISOString(),
      })),
      notes: [],
    };
  });
  return { currentProject: "foodMfg", projects };
}

function migrateFromV1(old) {
  const state = createDefaultState();
  if (old.tasks) {
    state.projects.foodMfg.tasks = old.tasks.map((t) => ({
      ...t,
      projectId: "foodMfg",
    }));
  }
  if (old.notes) {
    state.projects.foodMfg.notes = old.notes;
  }
  return state;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function uid() {
  return "id_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7);
}

function getProject() {
  return PROJECTS[state.currentProject];
}

function getProjectData() {
  return state.projects[state.currentProject];
}

function getPhaseName(id) {
  return getProject().phases.find((p) => p.id === id)?.name || id;
}

function phaseProgress(phaseId) {
  const tasks = getProjectData().tasks.filter((t) => t.phase === phaseId);
  if (!tasks.length) return { done: 0, total: 0, pct: 0 };
  const done = tasks.filter((t) => t.done).length;
  return { done, total: tasks.length, pct: Math.round((done / tasks.length) * 100) };
}

function switchProject(projectId) {
  state.currentProject = projectId;
  saveState();
  const p = PROJECTS[projectId];
  document.documentElement.style.setProperty("--accent", p.accent);
  document.getElementById("brandIcon").textContent = p.icon;
  document.getElementById("brandTitle").textContent = p.name;
  document.getElementById("brandSubtitle").textContent = "Learn & Task Tracker";
  renderProjectTabs();
  renderOverview();
  renderAdvisor();
  renderArchitecture();
  renderGlossary();
  repopulateSelects();
  updateProgress();
  renderPhases();
  renderTasks();
  renderNotes();
}

function renderProjectTabs() {
  document.getElementById("projectTabs").innerHTML = Object.values(PROJECTS)
    .map(
      (p) =>
        `<button class="project-tab ${p.id === state.currentProject ? "active" : ""}" data-project="${p.id}">
          <span>${p.icon}</span> ${p.shortName}
        </button>`
    )
    .join("");

  document.querySelectorAll(".project-tab").forEach((btn) => {
    btn.addEventListener("click", () => switchProject(btn.dataset.project));
  });
}

function renderOverview() {
  const p = getProject();
  document.getElementById("overviewTitle").textContent = "Project Vision";
  document.getElementById("overviewSubtitle").textContent = p.tagline;
  document.getElementById("advisorBanner").innerHTML = `
    <div class="banner-icon">🤝</div>
    <div class="banner-body">
      <strong>Advisor Mindset</strong>
      <p class="banner-quote">"${escapeHtml(ADVISOR.trustedQuote)}"</p>
      <p class="banner-quote">"${escapeHtml(ADVISOR.partnerQuote)}"</p>
      <button class="btn btn-ghost btn-sm banner-link" id="goToAdvisor">Learn Trusted Advisor + Partner Mindset →</button>
    </div>`;
  document.getElementById("goToAdvisor")?.addEventListener("click", () => {
    document.querySelector('[data-view="advisor"]').click();
  });
  document.getElementById("visionCard").innerHTML = `
    <h3>${escapeHtml(p.visionTitle)}</h3>
    <p>${escapeHtml(p.vision)}</p>`;
  document.getElementById("goalsGrid").innerHTML = p.goals
    .map(
      (g) => `
    <article class="goal-card">
      <span class="goal-icon">${g.icon}</span>
      <h4>${escapeHtml(g.title)}</h4>
      <p>${escapeHtml(g.desc)}</p>
    </article>`
    )
    .join("");
}

function renderAdvisor() {
  const projectId = state.currentProject;
  const questions = ADVISOR.projectDiscovery[projectId] || [];

  document.getElementById("advisorContent").innerHTML = `
    <div class="mindset-pillars">
      <blockquote class="advisor-quote pillar-quote">
        <span class="quote-label">Trusted Advisor</span>
        <p>"${escapeHtml(ADVISOR.trustedQuote)}"</p>
        <cite>${escapeHtml(ADVISOR.trustedNote)}</cite>
      </blockquote>
      <blockquote class="advisor-quote pillar-quote partner-quote-block">
        <span class="quote-label">Partner Mindset</span>
        <p>"${escapeHtml(ADVISOR.partnerQuote)}"</p>
        <cite>${escapeHtml(ADVISOR.partnerNote)}</cite>
      </blockquote>
    </div>

    <div class="advisor-section">
      <h3>How they work together</h3>
      <div class="connect-flow">
        ${ADVISOR.howTheyConnect
          .map(
            (c) => `
          <div class="connect-step">
            <strong>${escapeHtml(c.step)}</strong>
            <p>${escapeHtml(c.desc)}</p>
          </div>`
          )
          .join('<span class="connect-arrow">→</span>')}
      </div>
    </div>

    <div class="compare-grid">
      <article class="compare-card compare-bad">
        <h4>❌ Vendor approach</h4>
        <ul>${ADVISOR.vendorApproach.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
      </article>
      <article class="compare-card compare-good">
        <h4>✅ Trusted Advisor approach</h4>
        <ul>${ADVISOR.advisorApproach.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
      </article>
    </div>

    <div class="advisor-section">
      <h3>Discovery process (before any architecture)</h3>
      <div class="discovery-steps">
        ${ADVISOR.discoverySteps
          .map(
            (s) => `
          <div class="discovery-step">
            <span class="step-num">${escapeHtml(s.step)}</span>
            <p>${escapeHtml(s.q)}</p>
          </div>`
          )
          .join("")}
      </div>
    </div>

    <div class="advisor-section">
      <h3>Discovery questions for this project</h3>
      <p class="section-desc">Use these in Phase 1 before you design anything.</p>
      <ul class="discovery-questions">
        ${questions.map((q) => `<li>${escapeHtml(q)}</li>`).join("")}
      </ul>
    </div>

    <div class="advisor-section partner-section">
      <h3>Partner Mindset — what Solution Architects do</h3>
      <p class="section-desc">After discovery, shift from advisor to partner. SA's don't just design and leave — they help create the relationship.</p>
      <div class="compare-grid">
        <article class="compare-card compare-bad">
          <h4>❌ Vendor relationship</h4>
          <ul>${ADVISOR.vendorVsPartner.vendor.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
        </article>
        <article class="compare-card compare-good">
          <h4>✅ Partner relationship</h4>
          <ul>${ADVISOR.vendorVsPartner.partner.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
        </article>
      </div>
      <h4 class="subsection-title">Partner behaviors to practice</h4>
      <ul class="partner-behaviors">
        ${ADVISOR.partnerBehaviors.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
      </ul>
    </div>

    <div class="advisor-section">
      <h3>Why this matters for your career</h3>
      <div class="career-cards">
        <article class="career-card">
          <h4>Solution Architect</h4>
          <p>Trusted Advisor earns the room. Partner Mindset keeps you in the room. SAs who co-own outcomes become indispensable — not interchangeable vendors.</p>
        </article>
        <article class="career-card">
          <h4>Product Owner / TPM</h4>
          <p>Listen first (advisor), then build with users (partner). Stakeholders trust PMs who solve problems with them — not for them.</p>
        </article>
        <article class="career-card">
          <h4>Entrepreneur</h4>
          <p>Customers become partners and advocates. "Let's work together" beats "buy my product" — referrals and repeat business follow.</p>
        </article>
      </div>
    </div>

    <div class="advisor-practice">
      <h3>Practice now</h3>
      <p>Complete Phase 1 tasks: trusted advisor discovery, fit check, and partner mindset opening. Write answers in <strong>Notes</strong> before Phase 2.</p>
    </div>`;
}

function renderArchitecture() {
  const arch = getProject().architecture;
  document.getElementById("archSubtitle").textContent = arch.subtitle;
  document.getElementById("archDiagram").textContent = arch.diagram;
  document.getElementById("archComponents").innerHTML = arch.components
    .map(
      (c) => `
    <article class="arch-card">
      <h4>${escapeHtml(c.title)}</h4>
      <p>${escapeHtml(c.desc)}</p>
      ${c.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
    </article>`
    )
    .join("");
  document.getElementById("archExtra").innerHTML = `
    <h4>${escapeHtml(arch.extraTitle)}</h4>
    ${arch.extraLines.map((l) => `<code class="topic-line">${escapeHtml(l)}</code>`).join("")}`;
}

function renderGlossary() {
  const p = getProject();
  document.getElementById("glossarySubtitle").textContent = p.glossarySubtitle;
  document.getElementById("glossaryList").innerHTML = p.glossary
    .map(
      (g) => `
    <dl class="glossary-item">
      <dt>${escapeHtml(g.term)}</dt>
      <dd>${escapeHtml(g.def)}</dd>
    </dl>`
    )
    .join("");
}

function updateProgress() {
  const tasks = getProjectData().tasks;
  const total = tasks.length;
  const done = tasks.filter((t) => t.done).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  document.getElementById("overallProgress").style.width = pct + "%";
  document.getElementById("progressText").textContent = done + " / " + total + " tasks (" + pct + "%)";
}

function renderPhases() {
  const list = document.getElementById("phasesList");
  list.innerHTML = getProject().phases
    .map((p) => {
      const prog = phaseProgress(p.id);
      return `
      <div class="phase-item" data-phase="${p.id}">
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
        <span class="phase-progress">${prog.done}/${prog.total}</span>
        <div class="phase-bar"><div class="phase-bar-fill" style="width:${prog.pct}%"></div></div>
      </div>`;
    })
    .join("");

  list.querySelectorAll(".phase-item").forEach((el) => {
    el.addEventListener("click", () => {
      document.querySelector('[data-view="tasks"]').click();
      document.getElementById("phaseFilter").value = el.dataset.phase;
      renderTasks();
    });
  });
}

function renderTasks() {
  const phaseFilter = document.getElementById("phaseFilter").value;
  const statusFilter = document.getElementById("statusFilter").value;
  let tasks = [...getProjectData().tasks];

  if (phaseFilter !== "all") tasks = tasks.filter((t) => t.phase === phaseFilter);
  if (statusFilter === "pending") tasks = tasks.filter((t) => !t.done);
  if (statusFilter === "done") tasks = tasks.filter((t) => t.done);

  const list = document.getElementById("taskList");
  if (!tasks.length) {
    list.innerHTML = '<div class="empty-state">No tasks match your filters.</div>';
    return;
  }

  list.innerHTML = tasks
    .map(
      (t) => `
    <div class="task-item ${t.done ? "done" : ""}" data-id="${t.id}">
      <input type="checkbox" class="task-check" ${t.done ? "checked" : ""} />
      <div class="task-body">
        <div class="task-title">${escapeHtml(t.title)}</div>
        <div class="task-meta">
          <span class="badge badge-phase">${escapeHtml(getPhaseName(t.phase))}</span>
          <span class="badge badge-${t.priority}">${t.priority}</span>
        </div>
        ${t.desc ? `<div class="task-desc">${escapeHtml(t.desc)}</div>` : ""}
      </div>
      <div class="task-actions">
        <button class="btn btn-ghost btn-sm edit-task">Edit</button>
        <button class="btn btn-ghost btn-sm delete-task">Delete</button>
      </div>
    </div>`
    )
    .join("");

  list.querySelectorAll(".task-check").forEach((cb) => {
    cb.addEventListener("change", (e) => {
      const id = e.target.closest(".task-item").dataset.id;
      const task = getProjectData().tasks.find((t) => t.id === id);
      if (task) {
        task.done = e.target.checked;
        saveState();
        updateProgress();
        renderPhases();
        renderTasks();
      }
    });
  });

  list.querySelectorAll(".edit-task").forEach((btn) => {
    btn.addEventListener("click", (e) => openTaskModal(e.target.closest(".task-item").dataset.id));
  });

  list.querySelectorAll(".delete-task").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.closest(".task-item").dataset.id;
      if (confirm("Delete this task?")) {
        getProjectData().tasks = getProjectData().tasks.filter((t) => t.id !== id);
        saveState();
        updateProgress();
        renderPhases();
        renderTasks();
      }
    });
  });
}

function renderNotes() {
  const notes = getProjectData().notes;
  const list = document.getElementById("notesList");
  if (!notes.length) {
    list.innerHTML = '<div class="empty-state">No notes yet. Start writing what you learn!</div>';
    return;
  }

  const sorted = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  list.innerHTML = sorted
    .map(
      (n) => `
    <article class="note-card">
      <div class="note-card-header">
        <h4>${escapeHtml(n.title)}</h4>
        <span class="note-date">${formatDate(n.createdAt)}</span>
      </div>
      <span class="badge badge-phase">${escapeHtml(n.phase === "general" ? "General" : getPhaseName(n.phase))}</span>
      <div class="note-content">${escapeHtml(n.content)}</div>
      <div class="note-actions">
        <button class="btn btn-ghost btn-sm delete-note" data-id="${n.id}">Delete</button>
      </div>
    </article>`
    )
    .join("");

  list.querySelectorAll(".delete-note").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (confirm("Delete this note?")) {
        getProjectData().notes = getProjectData().notes.filter((n) => n.id !== btn.dataset.id);
        saveState();
        renderNotes();
      }
    });
  });
}

function repopulateSelects() {
  const phases = getProject().phases;
  const phaseFilter = document.getElementById("phaseFilter");
  const taskPhase = document.getElementById("taskPhase");
  const notePhase = document.getElementById("notePhase");

  phaseFilter.innerHTML = '<option value="all">All phases</option>';
  taskPhase.innerHTML = "";
  notePhase.innerHTML = '<option value="general">General</option>';

  phases.forEach((p) => {
    phaseFilter.innerHTML += `<option value="${p.id}">${p.name}</option>`;
    taskPhase.innerHTML += `<option value="${p.id}">${p.name}</option>`;
    notePhase.innerHTML += `<option value="${p.id}">${p.name}</option>`;
  });
}

function openTaskModal(editId = null) {
  const task = editId ? getProjectData().tasks.find((t) => t.id === editId) : null;
  document.getElementById("modalTitle").textContent = task ? "Edit Task" : "Add Task";
  document.getElementById("taskId").value = task?.id || "";
  document.getElementById("taskTitle").value = task?.title || "";
  document.getElementById("taskPhase").value = task?.phase || getProject().phases[0].id;
  document.getElementById("taskPriority").value = task?.priority || "medium";
  document.getElementById("taskDesc").value = task?.desc || "";
  document.getElementById("taskModal").classList.add("open");
}

function closeTaskModal() {
  document.getElementById("taskModal").classList.remove("open");
}

function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function initNavigation() {
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("view-" + btn.dataset.view).classList.add("active");
    });
  });
}

function initEvents() {
  document.getElementById("addTaskBtn").addEventListener("click", () => openTaskModal());
  document.getElementById("cancelTaskBtn").addEventListener("click", closeTaskModal);
  document.getElementById("taskModal").addEventListener("click", (e) => {
    if (e.target.id === "taskModal") closeTaskModal();
  });

  document.getElementById("saveTaskBtn").addEventListener("click", () => {
    const id = document.getElementById("taskId").value;
    const data = {
      title: document.getElementById("taskTitle").value.trim(),
      phase: document.getElementById("taskPhase").value,
      priority: document.getElementById("taskPriority").value,
      desc: document.getElementById("taskDesc").value.trim(),
    };
    if (!data.title) return alert("Title is required");

    if (id) {
      const task = getProjectData().tasks.find((t) => t.id === id);
      Object.assign(task, data);
    } else {
      getProjectData().tasks.push({
        id: uid(),
        ...data,
        done: false,
        createdAt: new Date().toISOString(),
      });
    }
    saveState();
    closeTaskModal();
    updateProgress();
    renderPhases();
    renderTasks();
  });

  document.getElementById("phaseFilter").addEventListener("change", renderTasks);
  document.getElementById("statusFilter").addEventListener("change", renderTasks);

  document.getElementById("saveNoteBtn").addEventListener("click", () => {
    const title = document.getElementById("noteTitle").value.trim();
    const content = document.getElementById("noteContent").value.trim();
    const phase = document.getElementById("notePhase").value;
    if (!title || !content) return alert("Title and content are required");

    getProjectData().notes.push({
      id: uid(),
      title,
      content,
      phase,
      createdAt: new Date().toISOString(),
    });
    saveState();
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";
    renderNotes();
  });
}

function showInitError(err) {
  const main = document.querySelector(".main");
  if (main) {
    main.innerHTML = `
      <div class="init-error">
        <h2>App failed to load</h2>
        <p>${escapeHtml(String(err.message || err))}</p>
        <p>Try refreshing the page, or double-click <strong>OPEN.bat</strong> to open the app directly.</p>
      </div>`;
  }
  console.error("Learn Tracker init error:", err);
}

function init() {
  try {
    initNavigation();
    initEvents();
    switchProject(state.currentProject);
  } catch (err) {
    showInitError(err);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
