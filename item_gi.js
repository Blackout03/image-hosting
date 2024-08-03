$(function () {

    var imgpre = $('#IMGPRE').val()
    var avid = $('#AVID').val()
    document.title = computer_.MiscText.TITLE[lang]

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').html(computer_.MiscText.Title[lang] + "<color style='font-size: 28px;'><br><b>" + VER_GI + "</b></color>");
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_);
    $('h3 .tlsub').hide()
    $('h3 .links').render([
        {
            img: imgpre + 'images/menu.png',
            class: '_menu_'
        },
        {
            img: imgpre + 'images/translate.png',
            class: '_translate_'
        }
    ]);

    var rarity_color = {
        1: "#919299",
        2: "#3c7c77",
        3: "#4174bd",
        4: "#7c54bc",
        5: "#d1a96a"
    }

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang3 + '/item.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        I_TYPE = '1'

        if (avid) {
            if (index_material_1[avid] != undefined) {
                I_TYPE = 1
                popItem(index_material_1[avid] + 1)
            } else if (index_material_2[avid] != undefined) {
                I_TYPE = 2
                popItem(index_material_2[avid] + 1)
            } else if (index_material_3[avid] != undefined) {
                I_TYPE = 3
                popItem(index_material_3[avid] + 1)
            } else if (index_material_4[avid] != undefined) {
                I_TYPE = 4
                popItem(index_material_4[avid] + 1)
            } else if (index_ingre_2[avid] != undefined) {
                I_TYPE = 5
                popItem(index_ingre_2[avid] + 1)
            } else if (index_namecard[avid] != undefined) {
                I_TYPE = 6
                popItem(index_namecard[avid] + 1)
            } else if (index_food[avid] != undefined) {
                I_TYPE = 7
                popItem(index_food[avid] + 1)
            } else if (index_ingre_1[avid] != undefined) {
                I_TYPE = 8
                popItem(index_ingre_1[avid] + 1)
            } else if (index_photo[avid] != undefined) {
                I_TYPE = 9
                popItem(index_photo[avid] + 1)
            } else if (index_trail[avid] != undefined) {
                I_TYPE = 10
                popItem(index_trail[avid] + 1)
            } else if (index_pfp[avid] != undefined) {
                I_TYPE = 11
                popItem(index_pfp[avid] + 1)
            } else if (index_widget[avid] != undefined) {
                I_TYPE = 12
                popItem(index_widget[avid] + 1)
            } 
        }

        $('container').render({
            template: {
                div: [
                    {
                        section: [
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Avatar/UI_AvatarIcon_72158_Circle.png',
                                },
                                class: (I_TYPE == '11') ? 'active' : '',
                                a: {
                                    'data-id': '11'
                                },
                                'title': 'Profile Pictures'
                            },
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_220104.png',
                                },
                                class: (I_TYPE == '12') ? 'active' : '',
                                a: {
                                    'data-id': '12'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_113002.png',
                                },
                                class: (I_TYPE == '1') ? 'active' : '',
                                a: {
                                    'data-id': '1'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_112040.png',
                                },
                                class: (I_TYPE == '2') ? 'active' : '',
                                a: {
                                    'data-id': '2'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_104312.png',
                                },
                                class: (I_TYPE == '3') ? 'active' : '',
                                a: {
                                    'data-id': '3'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_114020.png',
                                },
                                class: (I_TYPE == '4') ? 'active' : '',
                                a: {
                                    'data-id': '4'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_100058.png',
                                },
                                class: (I_TYPE == '5') ? 'active' : '',
                                a: {
                                    'data-id': '5'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Mat/UI_NameCardIcon_Keqing.png',
                                },
                                class: (I_TYPE == '6') ? 'active' : '',
                                a: {
                                    'data-id': '6'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_108126.png',
                                },
                                class: (I_TYPE == '7') ? 'active' : '',
                                a: {
                                    'data-id': '7'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_110014.png',
                                },
                                class: (I_TYPE == '8') ? 'active' : '',
                                a: {
                                    'data-id': '8'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_223015.png',
                                },
                                class: (I_TYPE == '9') ? 'active' : '',
                                a: {
                                    'data-id': '9'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Mat/UI_TraceEffectIcon_Momoka.png',
                                },
                                class: (I_TYPE == '10') ? 'active' : '',
                                a: {
                                    'data-id': '10'
                                }
                            }
                        ],
                        class: 'a_w_r'
                    },
                    {
                        hr: ''
                    },
                    {
                        div: [],
                        class: 'area'
                    }
                ],
                class: 'content'
            }
        })

        renderItems()

        $('body').addClass('bg')

    }

    $('body').on('click', '.a_w_r schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        I_TYPE = $(this).attr('data-id')
        renderItems()
    })

    function renderItems() {

        $('.area').empty()

        _items[parseInt(I_TYPE)].forEach(function (t, i) {
            $('.area').render({
                div: [
                    {
                        div: {
                            img: imgpre + ((t.Pic && (!t.Pic.includes("_P"))) ? ('homdgcat-res/Avatar/' + t.Pic + '.png') : ('homdgcat-res/Mat/' + t.Icon + '.png')),
                            class: 'item-icon',
                            event: {
                                error: function (d) {
                                    $(d.sender).hide()
                                }
                            },
                            a: {
                                loading: 'lazy'
                            }
                        },
                        class: 'item-up',
                    },
                    {
                        div: {
                            p: t.Name.length ? t.Name : '???',
                            class: 'item-name'
                        },
                        class: 'item-down'
                    },
                    {
                        img: imgpre + 'images/food_buffs/' + _BUFFICON[t.Buff] + '.png',
                        class: 'buff-icon',
                        when: t.Buff != undefined
                    },
                ],
                class: 'item-card hover-shadow',
                style: {
                    'background-image': `linear-gradient(180deg, ${rarity_color[t.R]}, #fff)`
                },
                a: {
                    'data-id': i + 1
                }
            })
        })

    }

    $('body').on('click', '.item-card', function () {
        popItem(parseInt($(this).attr('data-id')))
    })

    function popItem(y) {
        this_item = _items[parseInt(I_TYPE)][y - 1]
        poplayer({
            header: VER_GI,
            width: '100%',
            template: {
                div: [
                    {
                        img: imgpre + (this_item.Pic ? ('homdgcat-res/Avatar/' + this_item.Pic + '.png') : ('homdgcat-res/Mat/' + this_item.Icon + '.png')),
                        class: this_item.Pic ? 'icon' : 'icon2',
                    },
                    {
                        p: this_item.Name,
                        class: 'name',
                        style: {
                            'font-size': '1.2em'
                        }
                    },
                    {
                        p: this_item.Desc,
                        class: 'desc',
                    },
                    {
                        hr: '',
                        style: {
                            'border-color': '#dddddd',
                            margin: '20px auto 15px'
                        },
                        when: this_item.Eff != undefined
                    },
                    {
                        p: this_item.Eff,
                        class: 'desc',
                        when: this_item.Eff != undefined
                    },
                    {
                        hr: '',
                        style: {
                            'border-color': '#dddddd',
                            margin: '20px auto 15px'
                        },
                        when: this_item.Type != undefined
                    },
                    {
                        div: {
                            p: function (k) {
                                return k.data
                            },
                            class: 'desc',
                            data: this_item.Type
                        },
                        when: this_item.Type != undefined
                    },
                    {
                        hr: '',
                        style: {
                            'border-color': '#dddddd',
                            margin: '20px auto 15px'
                        },
                        when: this_item.Src
                    },
                    {
                        div: {
                            p: function (k) {
                                return k.data
                            },
                            class: 'desc',
                            data: this_item.Src
                        },
                        when: this_item.Src
                    },
                    {
                        hr: '',
                        style: {
                            'border-color': '#dddddd',
                            margin: '20px auto 15px'
                        },
                        when: this_item.Recipe
                    },
                    {
                        div: '',
                        class: 'center_div recipe',
                        when: this_item.Recipe
                    },
                ],
                class: 'a_section',
                style: {
                    'padding-top': '25px',
                    'padding-bottom': '10px',
                    'margin-bottom': '10px',
                }
            },
        })

        if (this_item.Recipe) {
            var this_recipe = _CR[this_item.Recipe]
            for (var j = 0; j < this_recipe.length; j += 2) {
                $('.recipe').render({
                    div: [
                        {
                            img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_' + this_recipe[j] + '.png'
                        },
                        {
                            span: this_recipe[j + 1].toString(),
                            class: 'monicon_num'
                        }
                    ],
                    class: 'recipe-icon item-jump hover-shadow',
                    a: {
                        'data-id': this_recipe[j]
                    }
                })
            }
        }

        if (this_item.AI) {
            $('.recipe').render({
                div: [
                    {
                        img: imgpre + 'homdgcat-res/Avatar/' + this_item.AI + '.png',
                    },
                ],
                class: 'recipe-icon avatar-jump hover-shadow',
                a: {
                    'data-id': this_item.Avatar
                }
            })
        }

    }

    $('body').on('click', '.item-jump', function () {
        window.open(`/gi/item/${$(this).attr('data-id')}`)
    })

    $('body').on('click', '.avatar-jump', function () {
        window.open(`/gi/char/${$(this).attr('data-id')}`)
    })

})
