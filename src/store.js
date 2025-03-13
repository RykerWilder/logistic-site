import { reactive } from "vue";

export const store = reactive({
    searchBar: false,
    main_services: [
        {
            title: 'Technology',
            description: 'We are continually focused on developing technology solutions adapted to our client need',
            icon: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
        },
        {
            title: 'Reefer Cargo',
            description: 'Regular and frequent monitoring from the receipt of the loaded container to final destination',
            icon: 'M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
        },
        {
            title: 'Dry Cargo',
            description: 'We work with most types of dry cargo, from valuable cargo to the most dangerous requiring care',
            icon: 'M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z'
        }
    ],
    trusted_feedback: [
        [
            {
                title: 'WooCommerce',
                feedback: 'Sono un cliente abituale dell Azienda GHI per i miei trasporti giornalieri da e per il lavoro. La loro efficienza nel gestire le corse quotidiane e la convenienza dei loro prezzi mi hanno convinto a continuare a utilizzare i loro servizi. È un sollievo sapere di poter contare su di loro per i miei spostamenti quotidiani.'
            },
            {
                title: 'WordPress',
                feedback: 'La mia azienda collabora regolarmente con l Azienda DEF per le nostre esigenze di trasporto di merci su larga scala. Abbiamo sempre apprezzato la loro affidabilità e trasparenza nel fornire preventivi chiari e nel rispettare i tempi di consegna. È raro trovare un partner logistico così affidabile e professionale.'
            },
            {
                title: 'Pingdom',
                feedback: 'Ho avuto l opportunità di usufruire dei servizi di trasporto dell Azienda ABC per una recente spedizione internazionale. Sono rimasto impressionato dalla loro attenzione al cliente e dalla disponibilità a risolvere eventuali problemi. La spedizione è stata gestita con cura e precisione, e sono rimasto soddisfatto dell intera esperienza.'
            }
        ],
        [
            {
                title: 'JQuery',
                feedback: 'La mia azienda collabora regolarmente con l Azienda DEF per le nostre esigenze di trasporto di merci su larga scala. Abbiamo sempre apprezzato la loro affidabilità e trasparenza nel fornire preventivi chiari e nel rispettare i tempi di consegna. È raro trovare un partner logistico così affidabile e professionale.'
            },
            {
                title: 'Less',
                feedback: 'Ho utilizzato i servizi di trasporto dell Azienda XYZ per consegnare merci urgenti più volte, e non mi hanno mai deluso. Il personale è professionale e cortese, e le consegne sono sempre puntuali. Consiglio vivamente questa azienda a chiunque cerchi un servizio di trasporto efficiente.'
            },
            {
                title: 'Amazon',
                feedback: 'Ho utilizzato i servizi di Azienda GHI per la spedizione dei miei prodotti e sono rimasto molto soddisfatto. La puntualità e l\'affidabilità sono state eccezionali. Consiglio vivamente i loro servizi a chiunque abbia bisogno di un trasporto efficiente.'
            }
        ],
        [
            {
                title: 'Shopify',
                feedback: 'Azienda GHI ha superato le mie aspettative con il loro servizio di logistica. Hanno gestito le mie spedizioni in modo impeccabile, garantendo che i pacchi arrivassero sempre in tempo. Un partner di fiducia per il mio business.'
            },
            {
                title: 'Etsy',
                feedback: 'Grazie ad Azienda GHI, ho potuto espandere il mio mercato oltre i confini locali. Il loro servizio di trasporto è stato fondamentale per la crescita del mio negozio online. Professionalità e cortesia sono il loro punto di forza.'
            },
            {
                title: 'eBay',
                feedback: 'Ho avuto un\'esperienza fantastica con Azienda GHI. Hanno gestito le mie spedizioni con grande cura e attenzione ai dettagli. I miei clienti sono sempre soddisfatti dei tempi di consegna. Consigliatissimo!'
            },
        ],
        [
            {
                title: 'Walmart',
                feedback: 'Azienda GHI è stata un partner eccezionale per la gestione della nostra catena di approvvigionamento. La loro capacità di adattarsi alle nostre esigenze e di fornire soluzioni su misura è stata impressionante.'
            },
            {
                title: 'Target',
                feedback: 'La collaborazione con Azienda GHI ha migliorato notevolmente la nostra efficienza logistica. I loro servizi sono sempre puntuali e affidabili, il che ci permette di concentrarci sulla crescita del nostro business.'
            },
            {
                title: 'Best Buy',
                feedback: 'Azienda GHI ha trasformato il modo in cui gestiamo le nostre consegne. La loro tecnologia avanzata e il servizio clienti eccezionale hanno fatto la differenza. Non potremmo essere più soddisfatti.'
            },
        ],
        [
            {
                title: 'Zalando',
                feedback: 'Con Azienda GHI, abbiamo trovato un partner affidabile per le nostre esigenze di trasporto internazionale. La loro competenza e professionalità sono state fondamentali per il successo delle nostre operazioni.'
            },
            {
                title: 'ASOS',
                feedback: 'Azienda GHI ha semplificato notevolmente il nostro processo di spedizione. La loro attenzione ai dettagli e la capacità di risolvere rapidamente eventuali problemi sono state impressionanti. Consigliatissimo!'
            },
            {
                title: 'Alibaba',
                feedback: 'La collaborazione con Azienda GHI ci ha permesso di ottimizzare i tempi di consegna e di ridurre i costi logistici. La loro flessibilità e professionalità sono state fondamentali per il nostro successo.'
            }
        ]
    ],
    footer_cards: [
        {
            title: "Company",
            list: ["Institutional", "Social & Events", "Innovation", "Environment", "Technology"],
        },
        {
            title: "Services",
            list: ["Audit & Assurance", "Financial Advisory", "Analytics and M&A", "Middle Marketing", "Legal Consulting"],
        },
        {
            title: "Consultants",
            list: ["David Cooper", "Oliver Jones", "Emma Lopez", "T. Johnson", "Jacob Hill Jr"],
        },
    ]
})
