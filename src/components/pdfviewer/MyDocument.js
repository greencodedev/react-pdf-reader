import React, { Component } from 'react';
import contrat1 from './contrat1.pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const getOffset = (el) => {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

const highlightPattern = (text, pattern) => {
    const splitText = text.split(pattern);

    if (splitText.length <= 1) {
        return text;
    }

    const matches = text.match(pattern);

    return splitText.reduce((arr, element, index) => (matches[index] ? [
        ...arr,
        element,
        <mark style={{ backgroundColor: "yellow" }}>
            {matches[index]}
        </mark>,
    ] : [...arr, element]), []);
};

export default class MyDocument extends Component {
    state = {
        numPages: null,
        pageNumber: 2,
        data: {
            "id": {
                "value": 70,
                "comment": "Ce contrat contient les clauses typiques des contrats de ce genre, cependant certains points doivent etre renegocies pour mieux proteger vos interets",
                "recommendations": [
                    {
                        "text": "Renegocier la clause de l'article 3",
                        "value": "MEDIUM",
                        "type": "TO_DO"
                    },
                    {
                        "text": "Renegocier la clause a l'article 5",
                        "value": "HIGH",
                        "type": "TO_DO"
                    }
                ]
            },
            "clauses": [
                {
                    "box": {
                        "x1": 133.26445,
                        "x2": 142.82335,
                        "y1": 203.03058,
                        "y2": 203.03058
                    },
                    "text": "les parties reconnaissent et déclarent expressément s'être mutuellement communiquées toutes les informations dont l'importance est déterminante pour leur consentement respectif aux engagements contractuels relatifs à leur projet, et ce, en raison du lien direct et nécessaire de ces informations avec le contenu des engagements projetés ou la qualité des soussignés.",
                    "appreciation": "GOOD",
                    "recommendations": [
                        {
                            "text": "trdstrtr recommenfatio",
                            "value": "MEDIUM",
                            "type": "TO_DO"
                        }
                    ],
                    "names": [
                        "Partie A",
                        "Partie B"
                    ],
                    "type": "COMMITMENT",
                    "consequences": [
                        {
                            "text": "text test cpmsequence",
                            "appreciation": "BAD"
                        }
                    ],
                    "pageNo": -1
                },
                {
                    "box": {
                        "x1": 73.22067,
                        "x2": 88.6304,
                        "y1": 430.0706,
                        "y2": 430.0706
                    },
                    "text": "Sauf résiliation anticipée ayant fait l'objet d'un accord écrit entre les parties, elles s'engagent à respecter les engagements souscrits dans le cadre du présent accord de confidentialité pendant toute la durée de leurs relations commerciales et, à compter de la fin de celle-ci, pendant une durée minimum de ..... (durée). En aucun cas, un défaut de diligence ou une renonciation temporaire par l'une des parties à faire valoir ses droits ne saurait être interprété comme une renonciation définitive par elle à faire valoir ses droits au titre de l'accord de confidentialité. Les parties reconnaissent et acceptent que les engagements figurant dans les présentes n'ont d'autre effet que de les protéger de la divulgation d'informations confidentielles et des dommages que cette dernière pourrait provoquer.",
                    "appreciation": "GOOD",
                    "recommendations": [
                        {
                            "text": "recommandation 124 fdre",
                            "value": "MEDIUM",
                            "type": "TO_DO"
                        },
                        {
                            "text": "recomendatoejrnnfd t4rsjktejs",
                            "value": "MEDIUM",
                            "type": "TO_WATCH"
                        }
                    ],
                    "names": [
                        "Ali D",
                        "R Roka"
                    ],
                    "type": "COMMITMENT",
                    "consequences": [
                        {
                            "text": "test texte consequence allo",
                            "appreciation": "BAD"
                        },
                        {
                            "text": "test texte consequence allo",
                            "appreciation": "GOOD"
                        }
                    ],
                    "pageNo": -1
                },
                {
                    "box": {
                        "x1": 73.22067,
                        "x2": 99.46898,
                        "y1": 168.23059,
                        "y2": 168.23059
                    },
                    "text": "Chaque partie reconnaît que chacune de leurs informations confidentielles reste leur pleine et entière propriété et qu'aucune disposition de cet accord de confidentialité ne saurait être interprétée comme octroyant un droit quelconque de propriété, de licence ou tout autre droit sur les informations confidentielles appartenant à l'autre partie.",
                    "appreciation": "GOOD",
                    "recommendations": [
                        {
                            "text": "text non recuperable",
                            "value": "HIGH",
                            "type": "TO_DO"
                        },
                        {
                            "text": "recomandationa as life to live",
                            "value": "MEDIUM",
                            "type": "TO_AVOID"
                        }
                    ],
                    "names": [
                        "Roka R",
                        "Ali D"
                    ],
                    "type": "COMMITMENT",
                    "consequences": [
                        {
                            "text": "consequence as karma",
                            "appreciation": "DANGER"
                        },
                        {
                            "text": "karma is a danger",
                            "appreciation": "DANGER"
                        }
                    ],
                    "pageNo": -1
                },
                {
                    "box": {
                        "x1": 87.82538,
                        "x2": 119.47365,
                        "y1": 644.1506,
                        "y2": 644.1506
                    },
                    "text": "préserver par tout moyen la nature strictement confidentielle des informations confidentielles qui lui ont été ou lui seront communiquées et à ne les divulguer à quiconque",
                    "appreciation": "GOOD",
                    "recommendations": [
                        {
                            "text": "testing the good recommandation high",
                            "value": "HIGH",
                            "type": "TO_DO"
                        },
                        {
                            "text": "testing the good recommandation high",
                            "value": "HIGH",
                            "type": "TO_AVOID"
                        }
                    ],
                    "names": [
                        "Ali D",
                        "R Roka"
                    ],
                    "type": "OBLIGATION",
                    "consequences": [
                        {
                            "text": "consequence as karma",
                            "appreciation": "DANGER"
                        },
                        {
                            "text": "consequence as karma",
                            "appreciation": "BAD"
                        }
                    ],
                    "pageNo": -1
                },
                {
                    "box": {
                        "x1": 87.82538,
                        "x2": 96.13288,
                        "y1": 665.0306,
                        "y2": 665.0306
                    },
                    "text": "ne pas reproduire ou utiliser, directement ou indirectement, les informations confidentielles à d'autres fins que d'accomplir les seuls travaux réalisés dans le cadre du projet ;",
                    "appreciation": "GOOD",
                    "recommendations": [
                        {
                            "text": "testing the good recommandation medium",
                            "value": "MEDIUM",
                            "type": "TO_DO"
                        },
                        {
                            "text": "testing the good recommandation high",
                            "value": "HIGH",
                            "type": "TO_DO"
                        }
                    ],
                    "names": [
                        "Ali D",
                        "R Roka"
                    ],
                    "type": "OBLIGATION",
                    "consequences": [
                        {
                            "text": "consequence as karma",
                            "appreciation": "BAD"
                        },
                        {
                            "text": "consequence as karma",
                            "appreciation": "BAD"
                        }
                    ],
                    "pageNo": -1
                },
                {
                    "box": {
                        "x1": 87.82538,
                        "x2": 96.13288,
                        "y1": 686.1506,
                        "y2": 686.1506
                    },
                    "text": "ne communiquer d'informations confidentielles, directement ou indirectement qu'à ceux des représentants qui sont ou seront directement chargés d'étudier et réaliser le projet ;",
                    "appreciation": "GOOD",
                    "recommendations": [
                        {
                            "text": "testing the good recommandation medium",
                            "value": "MEDIUM",
                            "type": "TO_DO"
                        },
                        {
                            "text": "testing the good recommandation high",
                            "value": "HIGH",
                            "type": "TO_DO"
                        }
                    ],
                    "names": [
                        "Ali D",
                        "R Roka"
                    ],
                    "type": "OBLIGATION",
                    "consequences": [
                        {
                            "text": "consequence as karma",
                            "appreciation": "BAD"
                        },
                        {
                            "text": "consequence as karma",
                            "appreciation": "BAD"
                        }
                    ],
                    "pageNo": -1
                },
                {
                    "box": {
                        "x1": 126.18303,
                        "x2": 172.0149,
                        "y1": 707.0306,
                        "y2": 707.0306
                    },
                    "text": "représentants respectent les termes et obligations de l'accord de confidentialité et à endosser l'entière responsabilité à l'égard de l'autre partie de toute violation du présent accord de confidentialité par l'un de ses représentants ;",
                    "appreciation": "GOOD",
                    "recommendations": [
                        {
                            "text": "testing the good recommandation high",
                            "value": "HIGH",
                            "type": "TO_DO"
                        },
                        {
                            "text": "testing the watighcing recommandation high",
                            "value": "MEDIUM",
                            "type": "TO_WATCH"
                        }
                    ],
                    "names": [
                        "Ali D",
                        "R Roka"
                    ],
                    "type": "OBLIGATION",
                    "consequences": [
                        {
                            "text": "Risque de resiliation de contrat",
                            "appreciation": "WATCHOUT"
                        },
                        {
                            "text": "Risique de sanction de paiement",
                            "appreciation": "NORMAL"
                        }
                    ],
                    "pageNo": -1
                },
                {
                    "box": {
                        "x1": 87.814186,
                        "x2": 110.306786,
                        "y1": 79.4306,
                        "y2": 79.4306
                    },
                    "text": "notifier l'autre partie de toute violation d'une disposition de l'accord de confidentialité, et ce dès lors qu'elle en aura connaissance ",
                    "appreciation": "GOOD",
                    "recommendations": [
                        {
                            "text": "testing the good recommandation high",
                            "value": "MEDIUM",
                            "type": "TO_DO"
                        },
                        {
                            "text": "test recommandation high",
                            "value": "HIGH",
                            "type": "TO_DO"
                        }
                    ],
                    "names": [
                        "Ali D",
                        "R Roka"
                    ],
                    "type": "OBLIGATION",
                    "consequences": [
                        {
                            "text": "paiement d'un montant forfaitaire",
                            "appreciation": "WATCHOUT"
                        },
                        {
                            "text": "resiliation de contrat avec effet immediat",
                            "appreciation": "DANGER"
                        }
                    ],
                    "pageNo": -1
                }
            ],
            "deadlines": [
                {
                    "box": null,
                    "text": null,
                    "date": "2020-02-10T00:00:00.000+0000",
                    "appreciation": "WATCHOUT",
                    "recommendations": [
                        {
                            "text": "test recommendation",
                            "value": "MEDIUM",
                            "type": "TO_DO"
                        }
                    ],
                    "type": "HARD",
                    "pageNo": 0
                }
            ],
            "contents": [
                {
                    "box": {
                        "x1": 277.45508,
                        "x2": 335.48715,
                        "y1": 616.07056,
                        "y2": 616.07056
                    },
                    "text": "Préambule",
                    "subContents": [],
                    "pageNo": -1
                },
                {
                    "box": {
                        "x1": 243.76949,
                        "x2": 310.47034,
                        "y1": 113.27057,
                        "y2": 113.27057
                    },
                    "text": "Déclarations préalables",
                    "subContents": [],
                    "pageNo": -1
                },
                {
                    "box": {
                        "x1": 72.47067,
                        "x2": 95.78019,
                        "y1": 283.4306,
                        "y2": 283.4306
                    },
                    "text": "Article 1 - Définitions",
                    "subContents": [],
                    "pageNo": -1
                },
                {
                    "box": {
                        "x1": 72.47067,
                        "x2": 95.78019,
                        "y1": 497.03058,
                        "y2": 497.03058
                    },
                    "text": "Article 2 - Informations non couvertes par la confidentialité",
                    "subContents": [],
                    "pageNo": -1
                },
                {
                    "box": {
                        "x1": 72.47067,
                        "x2": 95.78019,
                        "y1": 610.7906,
                        "y2": 610.7906
                    },
                    "text": "Article 3 - Obligations de parties",
                    "subContents": [],
                    "pageNo": -1
                },
                {
                    "box": {
                        "x1": 72.47067,
                        "x2": 95.78019,
                        "y1": 147.35059,
                        "y2": 147.35059
                    },
                    "text": "Article 4 - Propriété des informations",
                    "subContents": [],
                    "pageNo": -1
                },
                {
                    "box": {
                        "x1": 72.47067,
                        "x2": 95.78019,
                        "y1": 206.63062,
                        "y2": 206.63062
                    },
                    "text": "Article 5 - Restitution ou destruction des informations",
                    "subContents": [],
                    "pageNo": -1
                },
                {
                    "box": {
                        "x1": 72.47067,
                        "x2": 95.78019,
                        "y1": 299.03058,
                        "y2": 299.03058
                    },
                    "text": "Article 6 - Cession de droits",
                    "subContents": [],
                    "pageNo": -1
                },
                {
                    "box": null,
                    "text": "Article 7 - Bonne foi sdes parties",
                    "subContents": [],
                    "pageNo": -1
                },
                {
                    "box": {
                        "x1": 72.47067,
                        "x2": 95.78019,
                        "y1": 408.9506,
                        "y2": 408.9506
                    },
                    "text": "Article 8 - Durée de l'engagement",
                    "subContents": [],
                    "pageNo": -1
                },
                {
                    "box": {
                        "x1": 72.47067,
                        "x2": 95.78019,
                        "y1": 497.99057,
                        "y2": 497.99057
                    },
                    "text": "Article 9 - Attribution de compétence",
                    "subContents": [],
                    "pageNo": -1
                }
            ],
            "fileUrl": "contrat1.pdf",
            "pageHeight": 792.0,
            "pageWidth": 612.0
        }
    }
    makeTextRenderer = searchText => textItem => highlightPattern(textItem.str, searchText);

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }
    handleNext = () => {
        const { numPages, pageNumber } = this.state;
        if (numPages > pageNumber) {
            return this.setState({
                pageNumber: pageNumber + 1,
            })
        }

    }
    handlePrev = () => {
        const { pageNumber } = this.state;
        console.log(pageNumber)
        if (pageNumber > 1) {
            return this.setState({
                pageNumber: pageNumber - 1,
            })
        }

    }


    componentDidMount = () => {
        var x = document.getElementById('myid');
        var targetDiv = document.getElementById("myid").getElementsByClassName("doc")[0].getElementsByClassName("react-pdf__Page__textContent")[0];
        //var targetDiv1 =targetDiv.getElementsByClassName("docpage").length
        //  console.log(targetDiv);
    }
    load = () => {
        // var targetDiv = document.getElementById("myid").getElementsByClassName("doc")[0].getElementsByClassName("react-pdf__Page__textContent")[0].style.backgroundColor = "yellow";

        var list = document.getElementById("myid").getElementsByClassName("doc")[0].getElementsByClassName("react-pdf__Page__textContent")[0].childNodes;
        var a = document.querySelector("span")
        console.log(list)
        //var targetDiv1 =targetDiv.getElementsByClassName("docpage").length
        // console.log(targetDiv);
    }
    render() {
        const { pageNumber, numPages, data } = this.state;

        return (
            <div id="myid">
                <Document
                    className="doc"
                    file={contrat1}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page
                        className="docpage"
                        pageNumber={pageNumber}
                        customTextRenderer={this.makeTextRenderer(data.contents[1].text)}
                        onLoadSuccess={() => this.load()}
                    />

                </Document>
                <p>Page {pageNumber} of {numPages}</p>
                <button onClick={this.handlePrev}>Previus</button><button onClick={this.handleNext}>Next</button>
            </div>
        );
    }
}