import { Bot, FileText, Share2, MessageCircle, BarChart3, Calendar, Globe, Headphones, Users, Sparkles, UserCheck, ShieldAlert, TrendingUp, Truck, Building, RotateCcw, Scale } from 'lucide-react';
import emailAutomationImg from '@/assets/automations/email-automation.jpg';
import documentGenerationImg from '@/assets/automations/document-generation.jpg';
import socialMediaImg from '@/assets/automations/social-media.jpg';
import chatbotAiImg from '@/assets/automations/chatbot-ai.jpg';
import dataAnalysisImg from '@/assets/automations/data-analysis.jpg';
import crmSyncImg from '@/assets/automations/crm-sync.jpg';
import backupAutomationImg from '@/assets/automations/backup-automation.jpg';
import leadNurturingImg from '@/assets/automations/lead-nurturing.jpg';
import paymentAutomationImg from '@/assets/automations/payment-automation.jpg';
import inventoryManagementImg from '@/assets/automations/inventory-management.jpg';

export interface Automation {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: any;
  iconColor: string;
  executionsCount: string;
  timeEstimate: string;
  buttonText: string;
  categoryColor: string;
  image: string;
}

export const automations: Automation[] = [
  {
    id: 'gestion-retours',
    name: 'Gestion Retours Automatisée',
    category: 'E-commerce',
    description: 'Vérification éligibilité retours, étiquette auto + remboursement/stocks mis à jour en 1 clic.',
    features: ['Vérif règles retour IA', 'Étiquettes PDF', 'Stocks/Compta sync'],
    icon: RotateCcw,
    iconColor: 'text-amber-500',
    categoryColor: 'bg-amber-500/10',
    executionsCount: '27 451 exécutions',
    timeEstimate: '2 à 7 minutes',
    buttonText: 'Tester l\'automatisation',
    image: paymentAutomationImg
  },
  {
    id: 'detection-fraudes',
    name: 'Détection de Fraudes',
    category: 'Finance',
    description: 'Analyse transactions bancaires/PDF factures, détection anomalies avec IA, alertes immédiates contrôleur + blocage suspect.',
    features: ['Scan OCR transactions', 'IA détection anomalies', 'Alertes urgentes + blocage'],
    icon: ShieldAlert,
    iconColor: 'text-red-500',
    categoryColor: 'bg-red-500/10',
    executionsCount: '18 234 exécutions',
    timeEstimate: '2 à 8 minutes',
    buttonText: 'Tester l\'automatisation',
    image: documentGenerationImg
  },
  {
    id: 'suivi-colis',
    name: 'Suivi Colis & Alertes Retard',
    category: 'Logistique',
    description: 'Tracking colis fournisseurs/clients, alertes proactives 48h retard, relance transporteur automatique.',
    features: ['Multi-transporteurs API', 'Prédiction retards IA', 'Relance auto'],
    icon: Truck,
    iconColor: 'text-sky-500',
    categoryColor: 'bg-sky-500/10',
    executionsCount: '14 567 exécutions',
    timeEstimate: '4 à 15 minutes',
    buttonText: 'Tester l\'automatisation',
    image: inventoryManagementImg
  },
  {
    id: 'lead-scoring',
    name: 'Lead Scoring Automatique',
    category: 'CRM & Marketing',
    description: 'Analyse comportement web/email prospects, calcul score ICP, passage "chaud" + notification commerciale prioritaire.',
    features: ['Tracking multi-sources', 'Scoring IA comportemental', 'Pipeline CRM auto'],
    icon: TrendingUp,
    iconColor: 'text-emerald-500',
    categoryColor: 'bg-emerald-500/10',
    executionsCount: '9 128 exécutions',
    timeEstimate: '1 à 5 minutes',
    buttonText: 'Tester l\'automatisation',
    image: dataAnalysisImg
  },
  {
    id: 'visual-content',
    name: 'Génération de Contenus Visuels IA',
    category: 'Intelligence Artificielle',
    description: 'Génération de visuels ou visuels à partir de vos textes IA, stockage sur Google Drive et publication sur YouTube ou Réseaux sociaux.',
    features: ['Génération IA', 'Stockage automatique', 'Publication multi-plateformes'],
    icon: Sparkles,
    iconColor: 'text-purple-500',
    categoryColor: 'bg-purple-500/10',
    executionsCount: '6 413 exécutions',
    timeEstimate: '8 à 25 minutes',
    buttonText: 'Ouvrir la formule',
    image: paymentAutomationImg
  },
  {
    id: 'qualification-leads',
    name: 'Qualification Leads Visites',
    category: 'Immobilier',
    description: 'Questionnaire auto leads (budget/timing), RDV calendaire + dossier pré-rempli envoyé agent immobilier.',
    features: ['Chatbot qualification', 'Calendly auto', 'Dossier client prêt'],
    icon: Building,
    iconColor: 'text-violet-500',
    categoryColor: 'bg-violet-500/10',
    executionsCount: '3 892 exécutions',
    timeEstimate: '5 à 18 minutes',
    buttonText: 'Tester l\'automatisation',
    image: crmSyncImg
  },
  {
    id: 'automated-reports',
    name: 'Génération de Reports Automatique',
    category: 'Marketing',
    description: 'Génération automatique de rapports financiers, RH, support client ou marketing depuis différentes sources et envoi programmé par email ou Slack.',
    features: ['Rapports personnalisés', 'Envoi programmé', 'Multi-sources'],
    icon: BarChart3,
    iconColor: 'text-purple-500',
    categoryColor: 'bg-purple-500/10',
    executionsCount: '2 895 exécutions',
    timeEstimate: '5 à 9 jours',
    buttonText: 'Tester l\'automatisation',
    image: dataAnalysisImg
  },
  {
    id: 'tri-cv',
    name: 'Tri Automatique des CV',
    category: 'RH',
    description: 'Réception automatique des candidatures email/LinkedIn, extraction IA des compétences/expériences, notation selon critères poste, tri et envoi aux recruteurs.',
    features: ['Extraction IA compétences', 'Notation & scoring automatique', 'Notification recruteurs Slack/Email'],
    icon: UserCheck,
    iconColor: 'text-teal-500',
    categoryColor: 'bg-teal-500/10',
    executionsCount: '2 847 exécutions',
    timeEstimate: '3 à 12 minutes',
    buttonText: 'Tester l\'automatisation',
    image: leadNurturingImg
  },
  {
    id: 'contact-sync',
    name: 'Synchronisation de Contacts',
    category: 'CRM & Marketing',
    description: 'Synchronisation automatique de contacts entre plusieurs outils (CRM, Google Contacts, Mailchimp, etc.).',
    features: ['Sync multi-plateformes', 'Mise à jour automatique', 'Déduplication'],
    icon: Users,
    iconColor: 'text-blue-500',
    categoryColor: 'bg-blue-500/10',
    executionsCount: '2 487 exécutions',
    timeEstimate: '1 à 11 minutes',
    buttonText: 'Tester l\'automatisation',
    image: leadNurturingImg
  },
  {
    id: 'website-monitoring',
    name: 'Surveillance de Sites Web',
    category: 'Infrastructure',
    description: 'Monitoring automatique de sites web ou d\'autres services, alertes automatiques via email ou Slack en cas de ralentissement ou incident ou de changement détecté.',
    features: ['Monitoring continu', 'Alertes temps réel', 'Détection de changements'],
    icon: Globe,
    iconColor: 'text-cyan-500',
    categoryColor: 'bg-cyan-500/10',
    executionsCount: '2 284 exécutions',
    timeEstimate: '1 à 3 minutes',
    buttonText: 'Tester l\'automatisation',
    image: backupAutomationImg
  },
  {
    id: 'email-management',
    name: 'Gestion Intelligente des Emails',
    category: 'Communication',
    description: 'Triez automatiquement vos emails, répondez aux demandes répétitives et synchronisez avec votre messagerie. Utilisez Slack pour optimiser votre messagerie.',
    features: ['Tri automatique', 'Réponses intelligentes', 'Synchronisation Slack'],
    icon: Bot,
    iconColor: 'text-green-500',
    categoryColor: 'bg-green-500/10',
    executionsCount: '1 987 exécutions',
    timeEstimate: '1 à 6 minutes',
    buttonText: 'Tester l\'automatisation',
    image: emailAutomationImg
  },
  {
    id: 'controle-contrats',
    name: 'Contrôle Contrats Clients',
    category: 'Juridique',
    description: 'Vérification clauses critiques contrats (pénalités/échéances), validation/refus automatique + rapport juriste.',
    features: ['OCR + IA clauses', 'Checklist légale', 'Rapport anomalies'],
    icon: Scale,
    iconColor: 'text-slate-500',
    categoryColor: 'bg-slate-500/10',
    executionsCount: '1 765 exécutions',
    timeEstimate: '10 à 30 minutes',
    buttonText: 'Tester l\'automatisation',
    image: documentGenerationImg
  },
  {
    id: 'whatsapp-agent',
    name: 'Agent IA WhatsApp',
    category: 'Communication',
    description: 'Recevez les messages, prise de rendez-vous automatique et répondez à vos clients 24/7 grâce à notre agent intelligent sur WhatsApp.',
    features: ['Disponibilité 24/7', 'Prise de RDV', 'Réponses intelligentes'],
    icon: MessageCircle,
    iconColor: 'text-green-500',
    categoryColor: 'bg-green-500/10',
    executionsCount: '1 196 exécutions',
    timeEstimate: '1 à 2 minutes',
    buttonText: 'Tester l\'automatisation',
    image: chatbotAiImg
  },
  {
    id: 'support-automation',
    name: 'Automatisation Support Client',
    category: 'Communication',
    description: 'Création de tickets, réponse initiale automatique et messages à vos clients selon la demande pour optimiser votre support.',
    features: ['Création de tickets', 'Réponses automatiques', 'Routage intelligent'],
    icon: Headphones,
    iconColor: 'text-orange-500',
    categoryColor: 'bg-orange-500/10',
    executionsCount: '1 102 exécutions',
    timeEstimate: '5 à 9 minutes',
    buttonText: 'Tester l\'automatisation',
    image: chatbotAiImg
  },
  {
    id: 'social-media',
    name: 'Publication Automatique Réseaux Sociaux',
    category: 'Marketing',
    description: 'Création et publication sur la totalité de vos réseaux sociaux en un seul clic. Générez du contenu à partir d\'un flux RSS, blog, ou podcast.',
    features: ['Publication multi-plateformes', 'Génération de contenu', 'Planification'],
    icon: Share2,
    iconColor: 'text-pink-500',
    categoryColor: 'bg-pink-500/10',
    executionsCount: '1 074 exécutions',
    timeEstimate: '4 à 10 minutes',
    buttonText: 'Tester l\'automatisation',
    image: socialMediaImg
  },
  {
    id: 'invoice-extraction',
    name: 'Extraction de Données de Factures',
    category: 'Finance',
    description: 'Extraction automatique de données depuis les factures reçues par email et intégration pour enregistrement dans Google Sheets ou CRM.',
    features: ['Extraction automatique', 'Intégration Google Sheets', 'Synchronisation CRM'],
    icon: FileText,
    iconColor: 'text-blue-500',
    categoryColor: 'bg-blue-500/10',
    executionsCount: '987 exécutions',
    timeEstimate: '3 à 9 minutes',
    buttonText: 'Tester l\'automatisation',
    image: documentGenerationImg
  },
  {
    id: 'booking-system',
    name: 'Système de Réservation Automatisé',
    category: 'CRM & Marketing',
    description: 'Gestion des réservations avec confirmation par SMS ou WhatsApp, gestion des disponibilités et synchronisation avec calendrier.',
    features: ['Confirmations automatiques', 'Gestion des disponibilités', 'Synchronisation calendrier'],
    icon: Calendar,
    iconColor: 'text-indigo-500',
    categoryColor: 'bg-indigo-500/10',
    executionsCount: '678 exécutions',
    timeEstimate: '3 à 22 minutes',
    buttonText: 'Tester l\'automatisation',
    image: crmSyncImg
  }
];
