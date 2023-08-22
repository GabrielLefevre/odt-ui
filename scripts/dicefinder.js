Hooks.on('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id: "roman", name: "⁂ Veni Vidi Vici"}, "default");

    dice3d.addDicePreset({
        type: "df",
        labels: [
            'modules/mythicui/ui/dice/roman/dfm.webp',
            'modules/mythicui/ui/dice/roman/df.webp',
            'modules/mythicui/ui/dice/roman/dfp.webp'
        ],
        bumpMaps: [
            'modules/mythicui/ui/dice/roman/dfmb.webp',
            'modules/mythicui/ui/dice/roman/dfb.webp',
            'modules/mythicui/ui/dice/roman/dfpb.webp'
        ],
        system: "roman"
    });

    dice3d.addDicePreset({
        type: "d2",
        labels: [
            'modules/mythicui/ui/dice/roman/d2-1.webp',
            'modules/mythicui/ui/dice/roman/d2-2.webp'
        ],
        bumpMaps: [
            'modules/mythicui/ui/dice/roman/d2-1b.webp',
            'modules/mythicui/ui/dice/roman/d2-2b.webp'
        ],
        system: "roman"
    });

    dice3d.addDicePreset({
        type: "dc",
        labels: [
            'modules/mythicui/ui/dice/roman/dc-1.webp',
            'modules/mythicui/ui/dice/roman/dc-2.webp'
        ],
        bumpMaps: [
            'modules/mythicui/ui/dice/roman/dc-1b.webp',
            'modules/mythicui/ui/dice/roman/dc-2b.webp'
        ],
        system: "roman"
    });

    dice3d.addDicePreset({
        type: "d4",
        labels: [
            'I', 'II', 'III', 'IV'
        ],
        system: "roman"
    });

    dice3d.addDicePreset({
        type: "d6",
        labels: [
            'modules/mythicui/ui/dice/roman/d6-1.webp',
            'modules/mythicui/ui/dice/roman/d6-2.webp',
            'modules/mythicui/ui/dice/roman/d6-3.webp',
            'modules/mythicui/ui/dice/roman/d6-4.webp',
            'modules/mythicui/ui/dice/roman/d6-5.webp',
            'modules/mythicui/ui/dice/roman/d6-6.webp'
        ],
        bumpMaps: [
            'modules/mythicui/ui/dice/roman/d6-1b.webp',
            'modules/mythicui/ui/dice/roman/d6-2b.webp',
            'modules/mythicui/ui/dice/roman/d6-3b.webp',
            'modules/mythicui/ui/dice/roman/d6-4b.webp',
            'modules/mythicui/ui/dice/roman/d6-5b.webp',
            'modules/mythicui/ui/dice/roman/d6-6b.webp'
        ],
        system: "roman"
    });

    dice3d.addDicePreset({
        type: "d8",
        labels: [
            'modules/mythicui/ui/dice/roman/d8-1.webp',
            'modules/mythicui/ui/dice/roman/d8-2.webp',
            'modules/mythicui/ui/dice/roman/d8-3.webp',
            'modules/mythicui/ui/dice/roman/d8-4.webp',
            'modules/mythicui/ui/dice/roman/d8-5.webp',
            'modules/mythicui/ui/dice/roman/d8-6.webp',
            'modules/mythicui/ui/dice/roman/d8-7.webp',
            'modules/mythicui/ui/dice/roman/d8-8.webp'
        ],
        bumpMaps: [
            'modules/mythicui/ui/dice/roman/d8-1b.webp',
            'modules/mythicui/ui/dice/roman/d8-2b.webp',
            'modules/mythicui/ui/dice/roman/d8-3b.webp',
            'modules/mythicui/ui/dice/roman/d8-4b.webp',
            'modules/mythicui/ui/dice/roman/d8-5b.webp',
            'modules/mythicui/ui/dice/roman/d8-6b.webp',
            'modules/mythicui/ui/dice/roman/d8-7b.webp',
            'modules/mythicui/ui/dice/roman/d8-8b.webp'
        ],
        system: "roman"
    });

    dice3d.addDicePreset({
        type: "d10",
        labels: [
            'modules/mythicui/ui/dice/roman/d10-1.webp',
            'modules/mythicui/ui/dice/roman/d10-2.webp',
            'modules/mythicui/ui/dice/roman/d10-3.webp',
            'modules/mythicui/ui/dice/roman/d10-4.webp',
            'modules/mythicui/ui/dice/roman/d10-5.webp',
            'modules/mythicui/ui/dice/roman/d10-6.webp',
            'modules/mythicui/ui/dice/roman/d10-7.webp',
            'modules/mythicui/ui/dice/roman/d10-8.webp',
            'modules/mythicui/ui/dice/roman/d10-9.webp',
            'modules/mythicui/ui/dice/roman/d10-10.webp'
        ],
        bumpMaps: [
            'modules/mythicui/ui/dice/roman/d10-1b.webp',
            'modules/mythicui/ui/dice/roman/d10-2b.webp',
            'modules/mythicui/ui/dice/roman/d10-3b.webp',
            'modules/mythicui/ui/dice/roman/d10-4b.webp',
            'modules/mythicui/ui/dice/roman/d10-5b.webp',
            'modules/mythicui/ui/dice/roman/d10-6b.webp',
            'modules/mythicui/ui/dice/roman/d10-7b.webp',
            'modules/mythicui/ui/dice/roman/d10-8b.webp',
            'modules/mythicui/ui/dice/roman/d10-9b.webp',
            'modules/mythicui/ui/dice/roman/d10-10b.webp'
        ],
        system: "roman"
    });

    dice3d.addDicePreset({
        type: "d12",
        labels: [
            'modules/mythicui/ui/dice/roman/d12-1.webp',
            'modules/mythicui/ui/dice/roman/d12-2.webp',
            'modules/mythicui/ui/dice/roman/d12-3.webp',
            'modules/mythicui/ui/dice/roman/d12-4.webp',
            'modules/mythicui/ui/dice/roman/d12-5.webp',
            'modules/mythicui/ui/dice/roman/d12-6.webp',
            'modules/mythicui/ui/dice/roman/d12-7.webp',
            'modules/mythicui/ui/dice/roman/d12-8.webp',
            'modules/mythicui/ui/dice/roman/d12-9.webp',
            'modules/mythicui/ui/dice/roman/d12-10.webp',
            'modules/mythicui/ui/dice/roman/d12-11.webp',
            'modules/mythicui/ui/dice/roman/d12-12.webp'
        ],
        bumpMaps: [
            'modules/mythicui/ui/dice/roman/d12-1b.webp',
            'modules/mythicui/ui/dice/roman/d12-2b.webp',
            'modules/mythicui/ui/dice/roman/d12-3b.webp',
            'modules/mythicui/ui/dice/roman/d12-4b.webp',
            'modules/mythicui/ui/dice/roman/d12-5b.webp',
            'modules/mythicui/ui/dice/roman/d12-6b.webp',
            'modules/mythicui/ui/dice/roman/d12-7b.webp',
            'modules/mythicui/ui/dice/roman/d12-8b.webp',
            'modules/mythicui/ui/dice/roman/d12-9b.webp',
            'modules/mythicui/ui/dice/roman/d12-10b.webp',
            'modules/mythicui/ui/dice/roman/d12-11b.webp',
            'modules/mythicui/ui/dice/roman/d12-12b.webp'
        ],
        system: "roman"
    });

    dice3d.addDicePreset({
        type: "d20",
        labels: [
            'modules/mythicui/ui/dice/roman/d20-1.webp',
            'modules/mythicui/ui/dice/roman/d20-2.webp',
            'modules/mythicui/ui/dice/roman/d20-3.webp',
            'modules/mythicui/ui/dice/roman/d20-4.webp',
            'modules/mythicui/ui/dice/roman/d20-5.webp',
            'modules/mythicui/ui/dice/roman/d20-6.webp',
            'modules/mythicui/ui/dice/roman/d20-7.webp',
            'modules/mythicui/ui/dice/roman/d20-8.webp',
            'modules/mythicui/ui/dice/roman/d20-9.webp',
            'modules/mythicui/ui/dice/roman/d20-10.webp',
            'modules/mythicui/ui/dice/roman/d20-11.webp',
            'modules/mythicui/ui/dice/roman/d20-12.webp',
            'modules/mythicui/ui/dice/roman/d20-13.webp',
            'modules/mythicui/ui/dice/roman/d20-14.webp',
            'modules/mythicui/ui/dice/roman/d20-15.webp',
            'modules/mythicui/ui/dice/roman/d20-16.webp',
            'modules/mythicui/ui/dice/roman/d20-17.webp',
            'modules/mythicui/ui/dice/roman/d20-18.webp',
            'modules/mythicui/ui/dice/roman/d20-19.webp',
            'modules/mythicui/ui/dice/roman/d20-20.webp'
        ],
        bumpMaps: [
            'modules/mythicui/ui/dice/roman/d20-1b.webp',
            'modules/mythicui/ui/dice/roman/d20-2b.webp',
            'modules/mythicui/ui/dice/roman/d20-3b.webp',
            'modules/mythicui/ui/dice/roman/d20-4b.webp',
            'modules/mythicui/ui/dice/roman/d20-5b.webp',
            'modules/mythicui/ui/dice/roman/d20-6b.webp',
            'modules/mythicui/ui/dice/roman/d20-7b.webp',
            'modules/mythicui/ui/dice/roman/d20-8b.webp',
            'modules/mythicui/ui/dice/roman/d20-9b.webp',
            'modules/mythicui/ui/dice/roman/d20-10b.webp',
            'modules/mythicui/ui/dice/roman/d20-11b.webp',
            'modules/mythicui/ui/dice/roman/d20-12b.webp',
            'modules/mythicui/ui/dice/roman/d20-13b.webp',
            'modules/mythicui/ui/dice/roman/d20-14b.webp',
            'modules/mythicui/ui/dice/roman/d20-15b.webp',
            'modules/mythicui/ui/dice/roman/d20-16b.webp',
            'modules/mythicui/ui/dice/roman/d20-17b.webp',
            'modules/mythicui/ui/dice/roman/d20-18b.webp',
            'modules/mythicui/ui/dice/roman/d20-19b.webp',
            'modules/mythicui/ui/dice/roman/d20-20b.webp'
        ],
        system: "roman"
    });

    dice3d.addDicePreset({
        type: "d100",
        labels: [
            'modules/mythicui/ui/dice/roman/d100-10.webp',
            'modules/mythicui/ui/dice/roman/d100-20.webp',
            'modules/mythicui/ui/dice/roman/d100-30.webp',
            'modules/mythicui/ui/dice/roman/d100-40.webp',
            'modules/mythicui/ui/dice/roman/d100-50.webp',
            'modules/mythicui/ui/dice/roman/d100-60.webp',
            'modules/mythicui/ui/dice/roman/d100-70.webp',
            'modules/mythicui/ui/dice/roman/d100-80.webp',
            'modules/mythicui/ui/dice/roman/d100-90.webp',
            'modules/mythicui/ui/dice/roman/d100-100.webp'
        ],
        bumpMaps: [
            'modules/mythicui/ui/dice/roman/d100-10b.webp',
            'modules/mythicui/ui/dice/roman/d100-20b.webp',
            'modules/mythicui/ui/dice/roman/d100-30b.webp',
            'modules/mythicui/ui/dice/roman/d100-40b.webp',
            'modules/mythicui/ui/dice/roman/d100-50b.webp',
            'modules/mythicui/ui/dice/roman/d100-60b.webp',
            'modules/mythicui/ui/dice/roman/d100-70b.webp',
            'modules/mythicui/ui/dice/roman/d100-80b.webp',
            'modules/mythicui/ui/dice/roman/d100-90b.webp',
            'modules/mythicui/ui/dice/roman/d100-100b.webp'
        ],
        system: "roman"
    });

    dice3d.addTexture("roman", {
        name: "⁂ Veni Vidi Vici",
        composite: "source-over",
        source: "modules/mythicui/ui/dice/texture/roman.webp"
    })
        .then(() => {
            dice3d.addColorset({
                name: 'roman',
                description: "⁂ Veni Vidi Vici",
                category: "⁂ Veni Vidi Vici",
                texture: 'roman',
                material: "metal",
                foreground: "#13b6d8",
                outline: 'none',
                edge: "#cfd2ce",
                default: true
            }, "default");
        });
});
