var chart_config = {
	chart: {
		container: "#dinosaur-family-tree",
		animateOnInit: true,
		node: {
			collapsable: true,
		},
		animation: {
			nodeAnimation: "easeOutBounce",
			nodeSpeed: 700,
			connectorsAnimation: "bounce",
			connectorsSpeed: 700,
		},
	},
	nodeStructure: {
		text: {
			name: "Dinosauria",
		},
		children: [
			{
				text: {
					name: "Saurischians",
				},
				children: [
					{
						text: {
							name: "Theropods",
						},
						children: [
							{
								text: {
									name: "Carnosaurs",
								},
								children: [
									{
										image: "./assets/img/familytree/allosaurus.jpg",
										text: {
											name: "Allosaurus",
										},
										children: [
											{
												image: "./assets/img/familytree/deinonychus.png",
												text: {
													name: "Deinonychus",
												},
												children: [
													{
														image: "./assets/img/familytree/tyrannosaurus.jpg",
														text: {
															name: "Tyrannosaurus",
														},
													},
												],
											},
										],
									},
								],
							},

							{
								image: "./assets/img/familytree/coelophysis.jpg",
								text: {
									name: "Coelophysis",
								},
								children: [
									{
										text: {
											name: "Coelurosaurs",
										},
										children: [
											{
												image: "./assets/img/familytree/ornitholestes.jpg",
												text: {
													name: "Ornitholestes",
												},
												children: [
													{
														image: "./assets/img/familytree/ornithomimus.jpg",
														text: {
															name: "Ornithomimus",
														},
													},
												],
											},
										],
									},
								],
							},
						],
					},
				],
			},
			{
				text: {
					name: "Prosauropods",
				},
				children: [
					{
						image: "./assets/img/familytree/plateosaurus.jpg",
						text: {
							name: "Plateosaurus",
						},
						children: [
							{
								image: "./assets/img/familytree/brachiosaurus.jpg",
								text: {
									name: "Brachiosaurus",
								},
								children: [
									{
										image: "./assets/img/familytree/diplodocus.jpg",
										text: {
											name: "Diplodocus",
										},
										children: [
											{
												text: {
													name: "Sauropods",
												},
												children: [
													{
														image: "./assets/img/familytree/alomosaurus.jpg",
														text: {
															name: "Alomosaurus",
														},
													},
												],
											},
										],
									},
								],
							},
						],
					},
				],
			},

			{
				text: {
					name: "Ornithischians",
				},
				children: [
					{
						image: "./assets/img/familytree/scelidosarus.jpg",
						text: {
							name: "Scelidosarus",
						},
						children: [
							{
								text: {
									name: "Ankylosaurs",
								},
								children: [
									{
										image: "./assets/img/familytree/ankylosaurus.jpg",
										text: {
											name: "Ankylosaurus",
										},
									},
								],
							},
						],
					},
					{
						text: {
							name: "Stegosaurs",
						},
                        children: [
                            {
                                image: "./assets/img/familytree/stegosarus.jpg",
                                text: {
                                    name: "Stegosarus",
                                },
                            }
                        ]
					},
                    {
                        text: {
							name: "Ornithopods",
						},
                        children: [
                            {
                                image: "./assets/img/familytree/camptosaurus.jpg",
                                text: {
                                    name: "Camptosaurus",
                                },
                                children: [
                                    {
                                        image: "./assets/img/familytree/iguanodon.jpg",
                                        text: {
                                            name: "Iguanodon",
                                        },
                                        children: [
                                            {
                                                image: "./assets/img/familytree/anatosaurus.jpg",
                                                text: {
                                                    name: "Anatosaurus",
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        image: "./assets/img/familytree/protoceratops.jpg",
                                        text: {
                                            name: "Protoceratops",
                                        },
                                        children: [
                                            {
                                                image: "./assets/img/familytree/triceratops.jpg",
                                                text: {
                                                    name: "Triceratops",
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                        ]
                    }
				],
			},

			// {
			// 	image: "./../../../assets/img/familytree/lana.png",
			//     text:{
			//         name: "Joe Linux",
			//         title: "Chief Technology Officer",
			//     },
			// 	collapsed: true,
			// 	children: [
			// 		{
			// 			image: "./../../../assets/img/familytree/figgs.png",
			// 		},
			// 	],
			// },
			// {
			// 	image: "./../../../assets/img/familytree/sterling.png",
			// 	childrenDropLevel: 1,
			// 	children: [
			// 		{
			// 			image: "./../../../assets/img/familytree/woodhouse.png",
			// 		},
			// 	],
			// },
			// {
			// 	pseudo: true,
			// 	children: [
			// 		{
			// 			image: "./../../../assets/img/familytree/cheryl.png",
			// 		},
			// 		{
			// 			image: "./../../../assets/img/familytree/pam.png",
			// 		},
			// 	],
			// },
		],
	},
};
