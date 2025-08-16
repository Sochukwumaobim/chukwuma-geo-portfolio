export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience", 
      projects: "Projects",
      education: "Education",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      title: "GIS Specialist & Database Administrator",
      subtitle: "Passionate about geospatial technologies, spatial data infrastructure, and innovative mapping solutions",
      downloadCV: "Download CV",
      viewProjects: "View Projects"
    },
    about: {
      title: "About Me",
      description: "Experienced GIS Specialist with expertise in enterprise spatial data infrastructure, database administration, and geospatial analysis. Skilled in developing web mapping applications, managing geodatabases, and implementing quality control workflows for spatial data."
    },
    experience: {
      title: "Work Experience",
      current: "Current",
      company1: {
        company: "Enugu Electricity Distribution Company",
        location: "Enugu, Nigeria",
        department: "Geographic Information System (GIS)",
        position: "GIS Specialist and Database Administrator",
        period: "May 2021 – June 2024",
        achievements: [
          "Managed the company's Enterprise Spatial Data Infrastructure, ensuring availability and performance of geospatial systems",
          "Set up GIS Cloud for real-time field data collection and syncing with internal systems",
          "Developed quality control workflows for spatial data using FME, improving data reliability",
          "Produced detailed large-scale maps and conducted spatial analyses for engineering and planning teams",
          "Designed and deployed web maps to support asset tracking, outage reporting, and maintenance workflows",
          "Built and maintained a geodatabase for electricity asset management across multiple service zones",
          "Developed a database system for tracking electricity outages and response coordination",
          "Collaborated on a spatially enabled customer management system, integrating location-based data for improved service delivery",
          "Successfully restored the cloud server database and GIS applications after a crash, ensuring minimal operational downtime"
        ]
      },
      company2: {
        company: "Datamat Nig Ltd",
        location: "Owerri, Nigeria", 
        department: "Land Information System",
        position: "Lead Surveyor",
        period: "February 2018 – December 2020",
        achievements: [
          "Introduced the use of GIS tools for spatial analysis, streamlining project execution and improving data-driven decision-making",
          "Utilized Agisoft Metashape for drone image processing to support mapping and land assessment projects",
          "Led a palm tree counting project using drone and satellite imagery, delivering accurate yield estimates for agricultural planning",
          "Executed various land surveying tasks including parcellation, setting out, and leveling surveys using total stations",
          "Pioneered the digitization of legacy paper maps, reducing retrieval time and preserving critical spatial records",
          "Designed and developed a geodatabase for organizing legacy documents, significantly enhancing business efficiency",
          "Developed and implemented a KPI tracker for staff performance, leading to a 50% increase in productivity",
          "Conducted quarterly internal software trainings, improving team competence in GIS and surveying tools"
        ]
      }
    },
    projects: {
      title: "Featured Projects",
      project1: {
        title: "Integration of 2D ALKIS Data and 3D CityGML Models for Dynamic Web Visualization",
        year: "2025",
        technologies: "PostgreSQL/PostGIS, 3DCityDB, CesiumJS, GeoServer, Docker, pg2b3dm",
        highlights: [
          "Designed and implemented a hybrid database schema combining 3DCityDB with ALKIS cadastral data",
          "Built an automated ETL pipeline and linked semantic ontologies for spatial data interoperability", 
          "Developed a real-time 3D web visualization interface using CesiumJS with dynamic updates from the database"
        ]
      },
      project2: {
        title: "NDVI-Based Crop Yield Monitoring Using Sentinel-2 Data",
        year: "2025",
        technologies: "Copernicus Open Access Hub, Python (rasterio, numpy, matplotlib), Jupyter Notebooks",
        highlights: [
          "Processed NDVI time series from Sentinel-2 imagery to estimate oil palm crop health and yield trends",
          "Developed reproducible code in Jupyter Notebooks for raster analysis and visualization",
          "Focused on scalable methods suitable for regional agricultural monitoring"
        ]
      }
    },
    education: {
      title: "Education & Training",
      masters: {
        degree: "Master's Degree",
        institution: "Hochschule für Technik Stuttgart",
        period: "October 2024 – Current",
        location: "Stuttgart, Germany"
      },
      training: {
        title: "Treasure Hunt Stuttgart - Move, study, live and become a local",
        institution: "SkiLL (Service Center for Competence-Oriented & Innovative Learning & Teaching), HFT Stuttgart",
        period: "October 2024 – December 2024",
        location: "Stuttgart, Germany"
      },
      bachelor: {
        degree: "Bachelor's Degree",
        institution: "Federal University of Technology Owerri",
        period: "September 2012 – February 2018",
        location: "Owerri, Nigeria",
        field: "Surveying and Geoinformatics",
        grade: "4.3/5.0",
        thesis: "Spatial Accuracy of Google Earth Imagery"
      }
    },
    skills: {
      title: "Technical Skills",
      geospatial: {
        title: "Geospatial Technologies",
        items: [
          "ArcGIS Desktop/Pro (Advanced)",
          "QGIS",
          "ERDAS",
          "CesiumJS",
          "WebGIS: OpenLayers, Leaflet",
          "3D Modelling & CityGML",
          "Photogrammetry Software",
          "Field Data Acquisition"
        ]
      },
      database: {
        title: "Database Management",
        items: [
          "PostgreSQL/PostGIS",
          "MySQL, SQL, SQLite",
          "3DCityDB",
          "Geodatabase Design",
          "ETL Processes"
        ]
      },
      programming: {
        title: "Programming & Tools",
        items: [
          "Python",
          "FME",
          "Docker",
          "Jupyter Notebooks",
          "Enterprise Architecture",
          "Image Processing"
        ]
      },
      specialized: {
        title: "Specialized Software",
        items: [
          "Agisoft Metashape",
          "Trimble Inpho",
          "ArcGIS Collector",
          "QField",
          "GIS Cloud",
          "Pix4D"
        ]
      }
    },
    languages: {
      title: "Language Skills",
      levels: "Levels: A1 and A2: Basic user; B1 and B2: Independent user; C1 and C2: Proficient user",
      english: {
        language: "English",
        listening: "C2",
        reading: "C2", 
        writing: "C2",
        production: "C2",
        interaction: "C2"
      },
      german: {
        language: "German",
        listening: "A2",
        reading: "A2",
        writing: "A2", 
        production: "A2",
        interaction: "A2"
      }
    },
    recommendations: {
      title: "Recommendations",
      professor: {
        name: "Prof. Michael Mommert",
        title: "Lecturer",
        quote: "I am pleased to serve as a reference for Chukwuma Ugwu, who has demonstrated exceptional dedication and ability as one of my brightest students in the MSc program at HFT-Stuttgart.",
        email: "michael.mommert@hft-stuttgart.de"
      }
    },
    contact: {
      title: "Contact Information",
      phone: "Phone",
      email: "Email",
      linkedin: "LinkedIn",
      address: "Address",
      nationality: "Nationality"
    }
  },
  de: {
    nav: {
      about: "Über mich",
      experience: "Berufserfahrung",
      projects: "Projekte", 
      education: "Bildung",
      skills: "Fähigkeiten",
      contact: "Kontakt"
    },
    hero: {
      title: "GIS-Spezialist & Datenbankadministrator",
      subtitle: "Leidenschaftlich für Geotechnologien, räumliche Dateninfrastruktur und innovative Kartierungslösungen",
      downloadCV: "Lebenslauf herunterladen",
      viewProjects: "Projekte ansehen"
    },
    about: {
      title: "Über mich",
      description: "Erfahrener GIS-Spezialist mit Expertise in betrieblicher räumlicher Dateninfrastruktur, Datenbankadministration und Geodatenanalyse. Spezialisiert auf die Entwicklung von Web-Mapping-Anwendungen, Geodatenbank-Management und Implementierung von Qualitätskontroll-Workflows für räumliche Daten."
    },
    experience: {
      title: "Berufserfahrung",
      current: "Aktuell",
      company1: {
        company: "Enugu Electricity Distribution Company",
        location: "Enugu, Nigeria",
        department: "Geografisches Informationssystem (GIS)",
        position: "GIS-Spezialist und Datenbankadministrator",
        period: "Mai 2021 – Juni 2024",
        achievements: [
          "Verwaltung der Unternehmens-Geodateninfrastruktur zur Gewährleistung der Verfügbarkeit und Leistung von Geospatial-Systemen",
          "Einrichtung der GIS Cloud für Echtzeit-Felddatenerfassung und Synchronisierung mit internen Systemen",
          "Entwicklung von Qualitätskontroll-Workflows für räumliche Daten mit FME zur Verbesserung der Datenzuverlässigkeit",
          "Erstellung detaillierter großmaßstäblicher Karten und Durchführung räumlicher Analysen für Ingenieur- und Planungsteams",
          "Design und Bereitstellung von Web-Karten zur Unterstützung von Asset-Tracking, Störungsberichterstattung und Wartungsworkflows",
          "Aufbau und Wartung einer Geodatenbank für Stromanlage-Management in mehreren Servicezonen",
          "Entwicklung eines Datenbanksystems zur Verfolgung von Stromausfällen und Reaktionskoordination",
          "Zusammenarbeit an einem räumlich aktivierten Kundenmanagementsystem mit Integration standortbasierter Daten für verbesserte Servicebereitstellung",
          "Erfolgreiche Wiederherstellung der Cloud-Server-Datenbank und GIS-Anwendungen nach einem Absturz mit minimaler Betriebsunterbrechung"
        ]
      },
      company2: {
        company: "Datamat Nig Ltd",
        location: "Owerri, Nigeria",
        department: "Landinformationssystem",
        position: "Leitender Vermesser",
        period: "Februar 2018 – Dezember 2020",
        achievements: [
          "Einführung von GIS-Tools für räumliche Analysen zur Optimierung der Projektausführung und Verbesserung datenbasierter Entscheidungsfindung",
          "Nutzung von Agisoft Metashape für Drohnenbildverarbeitung zur Unterstützung von Kartierungs- und Landbewertungsprojekten",
          "Leitung eines Palmenzählprojekts mit Drohnen- und Satellitenbildern zur Lieferung genauer Ertragsschätzungen für landwirtschaftliche Planung",
          "Durchführung verschiedener Landvermessungsaufgaben einschließlich Parzellierung, Absteckung und Nivellierungsvermessungen mit Totalstationen",
          "Pionierarbeit bei der Digitalisierung von Legacy-Papierkarten zur Reduzierung der Abrufzeit und Erhaltung kritischer räumlicher Aufzeichnungen",
          "Design und Entwicklung einer Geodatenbank zur Organisation von Legacy-Dokumenten mit erheblicher Verbesserung der Geschäftseffizienz",
          "Entwicklung und Implementierung eines KPI-Trackers für Mitarbeiterleistung mit 50%iger Produktivitätssteigerung",
          "Durchführung vierteljährlicher interner Software-Schulungen zur Verbesserung der Teamkompetenz in GIS- und Vermessungstools"
        ]
      }
    },
    projects: {
      title: "Ausgewählte Projekte",
      project1: {
        title: "Integration von 2D ALKIS-Daten und 3D CityGML-Modellen für dynamische Web-Visualisierung",
        year: "2025",
        technologies: "PostgreSQL/PostGIS, 3DCityDB, CesiumJS, GeoServer, Docker, pg2b3dm",
        highlights: [
          "Design und Implementierung eines hybriden Datenbankschemas, das 3DCityDB mit ALKIS-Katasterdaten kombiniert",
          "Aufbau einer automatisierten ETL-Pipeline und Verknüpfung semantischer Ontologien für räumliche Dateninteroperabilität",
          "Entwicklung einer Echtzeit-3D-Web-Visualisierungsschnittstelle mit CesiumJS mit dynamischen Updates aus der Datenbank"
        ]
      },
      project2: {
        title: "NDVI-basiertes Ernteüberwachung mit Sentinel-2-Daten",
        year: "2025",
        technologies: "Copernicus Open Access Hub, Python (rasterio, numpy, matplotlib), Jupyter Notebooks",
        highlights: [
          "Verarbeitung von NDVI-Zeitreihen aus Sentinel-2-Bildmaterial zur Schätzung der Gesundheit und Ertragstrends von Ölpalmen",
          "Entwicklung reproduzierbaren Codes in Jupyter Notebooks für Rasteranalyse und Visualisierung",
          "Fokus auf skalierbare Methoden für regionale landwirtschaftliche Überwachung"
        ]
      }
    },
    education: {
      title: "Bildung & Ausbildung",
      masters: {
        degree: "Master-Abschluss",
        institution: "Hochschule für Technik Stuttgart",
        period: "Oktober 2024 – Aktuell",
        location: "Stuttgart, Deutschland"
      },
      training: {
        title: "Treasure Hunt Stuttgart - Move, study, live and become a local",
        institution: "SkiLL (Service Center for Competence-Oriented & Innovative Learning & Teaching), HFT Stuttgart",
        period: "Oktober 2024 – Dezember 2024",
        location: "Stuttgart, Deutschland"
      },
      bachelor: {
        degree: "Bachelor-Abschluss",
        institution: "Federal University of Technology Owerri",
        period: "September 2012 – Februar 2018",
        location: "Owerri, Nigeria",
        field: "Vermessung und Geoinformatik",
        grade: "4,3/5,0",
        thesis: "Räumliche Genauigkeit von Google Earth-Bildmaterial"
      }
    },
    skills: {
      title: "Technische Fähigkeiten",
      geospatial: {
        title: "Geospatial-Technologien",
        items: [
          "ArcGIS Desktop/Pro (Fortgeschritten)",
          "QGIS",
          "ERDAS",
          "CesiumJS",
          "WebGIS: OpenLayers, Leaflet",
          "3D-Modellierung & CityGML",
          "Photogrammetrie-Software",
          "Felddatenerfassung"
        ]
      },
      database: {
        title: "Datenbankmanagement",
        items: [
          "PostgreSQL/PostGIS",
          "MySQL, SQL, SQLite",
          "3DCityDB",
          "Geodatenbank-Design",
          "ETL-Prozesse"
        ]
      },
      programming: {
        title: "Programmierung & Tools",
        items: [
          "Python",
          "FME",
          "Docker",
          "Jupyter Notebooks",
          "Enterprise Architecture",
          "Bildverarbeitung"
        ]
      },
      specialized: {
        title: "Spezialisierte Software",
        items: [
          "Agisoft Metashape",
          "Trimble Inpho",
          "ArcGIS Collector",
          "QField",
          "GIS Cloud",
          "Pix4D"
        ]
      }
    },
    languages: {
      title: "Sprachkenntnisse",
      levels: "Niveaus: A1 und A2: Grundkenntnisse; B1 und B2: Selbstständige Sprachverwendung; C1 und C2: Kompetente Sprachverwendung",
      english: {
        language: "Englisch",
        listening: "C2",
        reading: "C2",
        writing: "C2",
        production: "C2",
        interaction: "C2"
      },
      german: {
        language: "Deutsch",
        listening: "A2",
        reading: "A2",
        writing: "A2",
        production: "A2",
        interaction: "A2"
      }
    },
    recommendations: {
      title: "Empfehlungen",
      professor: {
        name: "Prof. Michael Mommert",
        title: "Dozent",
        quote: "Ich freue mich, als Referenz für Chukwuma Ugwu zu dienen, der außergewöhnliche Hingabe und Fähigkeiten als einer meiner besten Studenten im MSc-Programm an der HFT-Stuttgart gezeigt hat.",
        email: "michael.mommert@hft-stuttgart.de"
      }
    },
    contact: {
      title: "Kontaktinformationen",
      phone: "Telefon",
      email: "E-Mail",
      linkedin: "LinkedIn",
      address: "Adresse",
      nationality: "Nationalität"
    }
  }
};