(() => {
  'use strict';

  const IMG_BASE = 'https://studio.smartduke.com/demo/solene-ring-shopify/img/';
  const MEN_IMG = './img/men/';

  const LOOKS = [
    {
      id: 'look1',
      name: 'Off duty',
      tone: '#e9dfd0',
      image: `${MEN_IMG}men1.webp`,
      alt: 'Male model wearing oversized beige linen blazer, white ribbed tank, off-white pleated trousers, and black leather loafers',
      line: "The suit jacket with jeans, because the trousers were at the cleaner's.",
      pieces: [
        {
          title: 'Oversized linen blazer',
          price: 280,
          thumb: `${IMG_BASE}look1-a.webp`,
          spot: { left: 22, top: 40, side: 'right' },
          variants: [
            { id: 4001, label: 'XS', available: true },
            { id: 4002, label: 'S', available: true },
            { id: 4003, label: 'M', available: true },
            { id: 4004, label: 'L', available: true }
          ]
        },
        {
          title: 'Wide white jeans',
          price: 175,
          compareAt: 220,
          thumb: `${IMG_BASE}look4-b.webp`,
          spot: { left: 40, top: 72, side: 'right' },
          variants: [
            { id: 4041, label: 'XS', available: true },
            { id: 4042, label: 'S', available: true },
            { id: 4043, label: 'M', available: true },
            { id: 4044, label: 'L', available: true }
          ]
        },
        {
          title: 'Soft leather loafers',
          price: 260,
          thumb: `${IMG_BASE}look3-c.webp`,
          spot: { left: 60, top: 94, side: 'left' },
          variants: [
            { id: 4032, label: '37', available: true },
            { id: 4033, label: '38', available: true },
            { id: 4034, label: '39', available: true },
            { id: 4035, label: '40', available: true },
            { id: 4036, label: '41', available: true }
          ]
        }
      ]
    },
    {
      id: 'look2',
      name: 'Market day',
      tone: '#e6cdbd',
      image: `${MEN_IMG}men7.webp`,
      alt: 'Male model wearing relaxed sky-blue overshirt, white tee, beige linen trousers, and tan leather sandals',
      line: 'The knit dress, the small bag, and shoes you can walk a long way in.',
      pieces: [
        {
          title: 'Ribbed knit midi dress',
          price: 240,
          thumb: `${IMG_BASE}look2-a.webp`,
          spot: { left: 40, top: 60, side: 'right' },
          variants: [
            { id: 4014, label: 'XS', available: true },
            { id: 4015, label: 'S', available: true },
            { id: 4016, label: 'M', available: true },
            { id: 4017, label: 'L', available: true }
          ]
        },
        {
          title: 'Small shoulder bag',
          price: 290,
          thumb: `${IMG_BASE}look5-c.webp`,
          spot: { left: 78, top: 46, side: 'left' },
          oneSize: true,
          variants: [{ id: 4054, label: 'One size', available: true }]
        },
        {
          title: 'Tan leather sandals',
          price: 160,
          compareAt: 210,
          thumb: `${IMG_BASE}look1-c.webp`,
          spot: { left: 60, top: 92, side: 'left' },
          variants: [
            { id: 4009, label: '37', available: true },
            { id: 4010, label: '38', available: true },
            { id: 4011, label: '39', available: true },
            { id: 4012, label: '40', available: true },
            { id: 4013, label: '41', available: true }
          ]
        }
      ]
    },
    {
      id: 'look3',
      name: 'Half tailored',
      tone: '#ded6c8',
      image: `${MEN_IMG}men1.webp`,
      alt: 'Male model wearing tailored beige linen jacket, white tank, and relaxed pleated trousers',
      line: 'A waistcoat on top, linen below. Smart to the waist and no further.',
      pieces: [
        {
          title: 'Tailored waistcoat',
          price: 210,
          thumb: `${IMG_BASE}look3-a.webp`,
          spot: { left: 40, top: 40, side: 'right' },
          variants: [
            { id: 4024, label: 'XS', available: true },
            { id: 4025, label: 'S', available: true },
            { id: 4026, label: 'M', available: true },
            { id: 4027, label: 'L', available: true }
          ]
        },
        {
          title: 'Wide linen trousers',
          price: 190,
          thumb: `${IMG_BASE}look1-b.webp`,
          spot: { left: 62, top: 72, side: 'left' },
          variants: [
            { id: 4005, label: 'XS', available: true },
            { id: 4006, label: 'S', available: true },
            { id: 4007, label: 'M', available: true },
            { id: 4008, label: 'L · sold out', available: false }
          ]
        },
        {
          title: 'Flat suede mules',
          price: 135,
          thumb: `${IMG_BASE}look2-c.webp`,
          spot: { left: 55, top: 95, side: 'right' },
          variants: [
            { id: 4019, label: '37 · sold out', available: false },
            { id: 4020, label: '38', available: true },
            { id: 4021, label: '39', available: true },
            { id: 4022, label: '40', available: true },
            { id: 4023, label: '41', available: true }
          ]
        }
      ]
    },
    {
      id: 'look4',
      name: 'First coffee',
      tone: '#d3dee6',
      image: `${MEN_IMG}men4.webp`,
      alt: 'Male model wearing oversized sky-blue poplin shirt, black tailored column trousers, brown leather crossbody bag, and derby shoes',
      line: 'A big shirt, a long trouser and both hands free.',
      pieces: [
        {
          title: 'Oversized poplin shirt',
          price: 155,
          thumb: `${IMG_BASE}look4-a.webp`,
          spot: { left: 75, top: 32, side: 'left' },
          variants: [
            { id: 4037, label: 'XS', available: true },
            { id: 4038, label: 'S', available: true },
            { id: 4039, label: 'M', available: true },
            { id: 4040, label: 'L', available: true }
          ]
        },
        {
          title: 'Column trousers',
          price: 230,
          thumb: `${IMG_BASE}look3-b.webp`,
          spot: { left: 62, top: 74, side: 'left' },
          variants: [
            { id: 4028, label: 'XS', available: true },
            { id: 4029, label: 'S', available: true },
            { id: 4030, label: 'M', available: true },
            { id: 4031, label: 'L', available: true }
          ]
        },
        {
          title: 'Leather belt bag',
          price: 195,
          thumb: `${IMG_BASE}look4-c.webp`,
          spot: { left: 32, top: 50, side: 'right' },
          oneSize: true,
          variants: [{ id: 4045, label: 'One size', available: true }]
        }
      ]
    },
    {
      id: 'look5',
      name: 'Late dinner',
      tone: '#ece2bd',
      image: `${MEN_IMG}men1.webp`,
      alt: 'Male model wearing oversized linen blazer over white ribbed tank, off-white trousers, and black loafers',
      line: 'The slip dress with the blazer over the shoulders for when the sun goes.',
      pieces: [
        {
          title: 'Bias-cut slip dress',
          price: 220,
          thumb: `${IMG_BASE}look5-a.webp`,
          spot: { left: 50, top: 62, side: 'right' },
          variants: [
            { id: 4046, label: 'XS · sold out', available: false },
            { id: 4047, label: 'S', available: true },
            { id: 4048, label: 'M', available: true },
            { id: 4049, label: 'L', available: true }
          ]
        },
        {
          title: 'Oversized linen blazer',
          price: 280,
          thumb: `${IMG_BASE}look1-a.webp`,
          spot: { left: 18, top: 48, side: 'right' },
          variants: [
            { id: 4001, label: 'XS', available: true },
            { id: 4002, label: 'S', available: true },
            { id: 4003, label: 'M', available: true },
            { id: 4004, label: 'L', available: true }
          ]
        },
        {
          title: 'Tan leather sandals',
          price: 160,
          compareAt: 210,
          thumb: `${IMG_BASE}look1-c.webp`,
          spot: { left: 62, top: 94, side: 'left' },
          variants: [
            { id: 4009, label: '37', available: true },
            { id: 4010, label: '38', available: true },
            { id: 4011, label: '39', available: true },
            { id: 4012, label: '40', available: true },
            { id: 4013, label: '41', available: true }
          ]
        }
      ]
    },
    {
      id: 'look6',
      name: 'Sunday',
      tone: '#efe6d6',
      image: `${MEN_IMG}men4.webp`,
      alt: 'Male model wearing pale blue button-down shirt, black trousers, and leather crossbody bag',
      line: 'A cardigan worn as a top, white denim and a bag for the bread.',
      pieces: [
        {
          title: 'Fine cotton cardigan',
          price: 165,
          thumb: `${IMG_BASE}look5-b.webp`,
          spot: { left: 68, top: 38, side: 'left' },
          variants: [
            { id: 4050, label: 'XS', available: true },
            { id: 4051, label: 'S', available: true },
            { id: 4052, label: 'M', available: true },
            { id: 4053, label: 'L', available: true }
          ]
        },
        {
          title: 'Wide white jeans',
          price: 175,
          compareAt: 220,
          thumb: `${IMG_BASE}look4-b.webp`,
          spot: { left: 66, top: 72, side: 'left' },
          variants: [
            { id: 4041, label: 'XS', available: true },
            { id: 4042, label: 'S', available: true },
            { id: 4043, label: 'M', available: true },
            { id: 4044, label: 'L', available: true }
          ]
        },
        {
          title: 'Woven raffia tote',
          price: 145,
          thumb: `${IMG_BASE}look2-b.webp`,
          spot: { left: 18, top: 78, side: 'right' },
          oneSize: true,
          variants: [{ id: 4018, label: 'One size', available: true }]
        }
      ]
    },
    {
      id: 'look7',
      name: 'Long weekend',
      tone: '#d9e2e4',
      image: `${MEN_IMG}men7.webp`,
      alt: 'Male model wearing open pale sky-blue overshirt over white t-shirt, wide beige linen trousers, and tan leather sandals',
      line: 'The shirt left open, the linen trousers, and sandals all day.',
      pieces: [
        {
          title: 'Oversized poplin shirt',
          price: 155,
          thumb: `${IMG_BASE}look4-a.webp`,
          spot: { left: 78, top: 38, side: 'left' },
          variants: [
            { id: 4037, label: 'XS', available: true },
            { id: 4038, label: 'S', available: true },
            { id: 4039, label: 'M', available: true },
            { id: 4040, label: 'L', available: true }
          ]
        },
        {
          title: 'Wide linen trousers',
          price: 190,
          thumb: `${IMG_BASE}look1-b.webp`,
          spot: { left: 40, top: 72, side: 'right' },
          variants: [
            { id: 4005, label: 'XS', available: true },
            { id: 4006, label: 'S', available: true },
            { id: 4007, label: 'M', available: true },
            { id: 4008, label: 'L · sold out', available: false }
          ]
        },
        {
          title: 'Tan leather sandals',
          price: 160,
          compareAt: 210,
          thumb: `${IMG_BASE}look1-c.webp`,
          spot: { left: 60, top: 93, side: 'left' },
          variants: [
            { id: 4009, label: '37', available: true },
            { id: 4010, label: '38', available: true },
            { id: 4011, label: '39', available: true },
            { id: 4012, label: '40', available: true },
            { id: 4013, label: '41', available: true }
          ]
        }
      ]
    },
    {
      id: 'look8',
      name: 'Gallery',
      tone: '#dcdad6',
      image: `${MEN_IMG}men4.webp`,
      alt: 'Male model wearing crisp pale blue shirt, black tailored trousers, brown leather bag, and black derbies',
      line: 'Black on top, white below, one small bag. It always works.',
      pieces: [
        {
          title: 'Tailored waistcoat',
          price: 210,
          thumb: `${IMG_BASE}look3-a.webp`,
          spot: { left: 52, top: 50, side: 'right' },
          variants: [
            { id: 4024, label: 'XS', available: true },
            { id: 4025, label: 'S', available: true },
            { id: 4026, label: 'M', available: true },
            { id: 4027, label: 'L', available: true }
          ]
        },
        {
          title: 'Wide white jeans',
          price: 175,
          compareAt: 220,
          thumb: `${IMG_BASE}look4-b.webp`,
          spot: { left: 40, top: 78, side: 'right' },
          variants: [
            { id: 4041, label: 'XS', available: true },
            { id: 4042, label: 'S', available: true },
            { id: 4043, label: 'M', available: true },
            { id: 4044, label: 'L', available: true }
          ]
        },
        {
          title: 'Small shoulder bag',
          price: 290,
          thumb: `${IMG_BASE}look5-c.webp`,
          spot: { left: 86, top: 44, side: 'left' },
          oneSize: true,
          variants: [{ id: 4054, label: 'One size', available: true }]
        }
      ]
    }
  ];

  /* ==========================================================================
     Utilities
     ========================================================================== */

  const pad2 = (n) => String(n).padStart(2, '0');
  const formatPrice = (amount) => `$${amount}`;
  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     Main Controller
     ========================================================================== */

  class SoleneLookRing {
    constructor(root, looks) {
      this.root = root;
      this.looks = looks;
      this.N = looks.length;

      this.stage = root.querySelector('[data-stage]');
      this.emptyEl = root.querySelector('[data-empty]');
      this.headEl = root.querySelector('.rg-head');
      this.floorRings = root.querySelectorAll('.rg-floor i');
      this.nearEl = root.querySelector('[data-near]');
      this.nearIndexEl = root.querySelector('[data-near-index]');
      this.nearTotalEl = root.querySelector('[data-near-total]');
      this.nearNameEl = root.querySelector('[data-near-name]');
      this.viewBtn = root.querySelector('[data-view]');
      this.turnEl = root.querySelector('[data-turn]');
      this.prevBtn = root.querySelector('[data-prev]');
      this.nextBtn = root.querySelector('[data-next]');

      this.panelEl = root.querySelector('[data-panel]');
      this.panelIndexEl = root.querySelector('[data-panel-index]');
      this.panelTotalEl = root.querySelector('[data-panel-total]');
      this.panelNameEl = root.querySelector('[data-panel-name]');
      this.panelHeadingEl = root.querySelector('.rg-big');
      this.panelLineEl = root.querySelector('[data-panel-line]');
      this.piecesListEl = root.querySelector('[data-pieces]');
      this.addLookBtn = root.querySelector('[data-add-look]');
      this.addLookLabelEl = root.querySelector('[data-add-look-label]');
      this.addLookPriceEl = root.querySelector('[data-add-look-price]');
      this.closeBtn = root.querySelector('[data-close]');

      this.toastEl = root.querySelector('[data-toast]');
      this.announcerEl = root.querySelector('[data-announcer]');

      // Guard: empty looks state
      if (!this.N) {
        this.nearEl.hidden = true;
        this.turnEl.hidden = true;
        this.emptyEl.hidden = false;
        return;
      }

      this.STEP = (Math.PI * 2) / this.N;
      this.ringState = { rot: 0 };
      this.mode = 'ring'; // 'ring' | 'opening' | 'open' | 'closing'
      this.front = -1;
      this.openAt = -1;
      this.hot = -1;
      this.cartCount = 0;
      this.lastFocusedEl = null;

      this.rotTween = null;
      this.openTl = null;
      this.closeTl = null;
      this.toastTimer = null;

      // Drag tracking
      this.drag = {
        down: false,
        moved: 0,
        lastX: 0,
        velocity: 0
      };

      this.figEls = [];
      this.metrics = [];

      this.buildFigures();
      this.bindEvents();
      this.placeFigures(true);
      this.initObservers();
    }

    dur(seconds) {
      return prefersReducedMotion() ? 0.01 : seconds;
    }

    /* ----------------------------------------------------------------------
       DOM Construction
       ---------------------------------------------------------------------- */

    buildFigures() {
      const frag = document.createDocumentFragment();
      this.nearTotalEl.textContent = `/ ${pad2(this.N)}`;
      this.panelTotalEl.textContent = `/ ${pad2(this.N)}`;

      this.looks.forEach((look, index) => {
        const fig = document.createElement('div');
        fig.className = 'rg-figure';
        fig.dataset.index = String(index);
        fig.dataset.tone = look.tone;

        const shadow = document.createElement('span');
        shadow.className = 'rg-shadow';
        fig.appendChild(shadow);

        const img = document.createElement('img');
        img.src = look.image;
        img.alt = index === 0 ? look.alt : '';
        img.loading = index === 0 ? 'eager' : 'lazy';
        img.decoding = 'async';
        img.addEventListener('error', () => {
          const ph = document.createElement('span');
          ph.className = 'rg-ph';
          ph.setAttribute('aria-hidden', 'true');
          img.replaceWith(ph);
        });
        fig.appendChild(img);

        // Hotspots inside figure (counter-scaled in CSS)
        look.pieces.forEach((piece, k) => {
          const spotWrap = document.createElement('span');
          spotWrap.className = 'rg-spot';
          spotWrap.style.left = `${piece.spot.left}%`;
          spotWrap.style.top = `${piece.spot.top}%`;

          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = `rw-spot${piece.spot.side === 'left' ? ' rw-spot--left' : ''}`;
          btn.style.setProperty('--k', String(k));
          btn.dataset.spot = '';
          btn.dataset.k = String(k);
          btn.setAttribute('aria-label', `${piece.title}, ${formatPrice(piece.price)}`);

          const dot = document.createElement('i');
          const tag = document.createElement('span');
          tag.className = 'rw-tag';
          tag.textContent = `${piece.title} · ${formatPrice(piece.price)}`;

          btn.append(dot, tag);
          btn.addEventListener('pointerenter', () => this.setHot(k));
          btn.addEventListener('pointerleave', () => this.setHot(-1));
          btn.addEventListener('focus', () => this.setHot(k));
          btn.addEventListener('blur', () => this.setHot(-1));
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.setHot(k);
          });

          spotWrap.appendChild(btn);
          fig.appendChild(spotWrap);
        });

        fig.addEventListener('click', () => {
          if (this.mode === 'ring' && this.drag.moved < 6) {
            this.openLook(index, fig);
          }
        });

        frag.appendChild(fig);
        this.figEls.push(fig);
      });

      this.stage.appendChild(frag);

      if (this.N === 1) {
        this.turnEl.hidden = true;
      }
    }

    renderPanelLook(index) {
      const look = this.looks[index];
      this.panelIndexEl.textContent = `Look ${pad2(index + 1)}`;
      this.panelNameEl.textContent = look.name;
      this.panelLineEl.textContent = look.line || '';

      this.piecesListEl.innerHTML = '';

      if (!look.pieces || !look.pieces.length) {
        this.piecesListEl.hidden = true;
        this.addLookBtn.hidden = true;
        return;
      }

      this.piecesListEl.hidden = false;
      this.addLookBtn.hidden = false;

      look.pieces.forEach((piece, k) => {
        const li = document.createElement('li');
        li.dataset.piece = '';
        li.dataset.k = String(k);

        const availableVariants = piece.variants.filter((v) => v.available);
        const isPieceSoldOut = availableVariants.length === 0;

        // Thumbnail
        const thumbLink = document.createElement('a');
        thumbLink.className = 'rg-thumb';
        thumbLink.href = '#demo';
        thumbLink.tabIndex = -1;
        const thumbImg = document.createElement('img');
        thumbImg.src = piece.thumb;
        thumbImg.alt = '';
        thumbImg.loading = 'lazy';
        thumbLink.appendChild(thumbImg);

        // Title & Price
        const what = document.createElement('span');
        what.className = 'rg-what';
        const titleB = document.createElement('b');
        const titleA = document.createElement('a');
        titleA.href = '#demo';
        titleA.textContent = piece.title;
        titleB.appendChild(titleA);

        const priceSpan = document.createElement('span');
        priceSpan.textContent = formatPrice(piece.price);
        if (piece.compareAt) {
          const strike = document.createElement('s');
          strike.textContent = formatPrice(piece.compareAt);
          priceSpan.appendChild(strike);
        }
        what.append(titleB, priceSpan);

        // Variant Control (Select or One Size)
        let variantNode;
        if (piece.oneSize) {
          const wrap = document.createElement('span');
          wrap.className = 'rw-one';
          wrap.textContent = 'One size';
          const hiddenInput = document.createElement('input');
          hiddenInput.type = 'hidden';
          hiddenInput.dataset.variant = '';
          hiddenInput.value = piece.variants[0]?.available ? String(piece.variants[0].id) : '';
          wrap.appendChild(hiddenInput);
          variantNode = wrap;
        } else {
          const label = document.createElement('label');
          label.className = 'rw-size';
          const sr = document.createElement('span');
          sr.className = 'rw-sr';
          sr.textContent = `Size: ${piece.title}`;
          const select = document.createElement('select');
          select.dataset.variant = '';

          let selectedSet = false;
          piece.variants.forEach((v) => {
            const opt = document.createElement('option');
            opt.value = String(v.id);
            opt.textContent = v.label;
            if (!v.available) {
              opt.disabled = true;
            } else if (!selectedSet) {
              opt.selected = true;
              selectedSet = true;
            }
            select.appendChild(opt);
          });

          select.addEventListener('change', () => this.updateLookTotal(index));
          label.append(sr, select);
          variantNode = label;
        }

        // Single Add Button
        const addBtn = document.createElement('button');
        addBtn.type = 'button';
        addBtn.className = 'rw-add';
        addBtn.textContent = '+';
        addBtn.disabled = isPieceSoldOut;
        addBtn.setAttribute(
          'aria-label',
          isPieceSoldOut ? `Sold out: ${piece.title}` : `Add to bag: ${piece.title}`
        );
        addBtn.addEventListener('click', () => {
          const variantId = this.getSelectedVariant(li);
          if (!variantId) return;
          this.addToBag([variantId], `${piece.title} added to your bag`, addBtn);
        });

        li.addEventListener('pointerenter', () => this.setHot(k));
        li.addEventListener('pointerleave', () => this.setHot(-1));

        li.append(thumbLink, what, variantNode, addBtn);
        this.piecesListEl.appendChild(li);
      });

      this.updateLookTotal(index);
    }

    getSelectedVariant(pieceEl) {
      const control = pieceEl.querySelector('[data-variant]');
      if (!control) return '';
      if (control.tagName === 'SELECT') {
        const opt = control.options[control.selectedIndex];
        return opt && !opt.disabled ? opt.value : '';
      }
      return control.disabled ? '' : control.value;
    }

    updateLookTotal(index) {
      const look = this.looks[index];
      const rows = Array.from(this.piecesListEl.querySelectorAll('[data-piece]'));
      let total = 0;
      let availableCount = 0;

      rows.forEach((row, k) => {
        if (this.getSelectedVariant(row)) {
          total += look.pieces[k].price;
          availableCount += 1;
        }
      });

      this.addLookBtn.disabled = availableCount === 0;
      this.addLookLabelEl.textContent = availableCount === 0 ? 'Sold out' : 'Add the look';
      this.addLookPriceEl.textContent = availableCount === 0 ? '' : formatPrice(total);
    }

    /* ----------------------------------------------------------------------
       2.5D Elliptical Ring Projection
       ---------------------------------------------------------------------- */

    computeGeometry() {
      const W = this.root.clientWidth;
      const H = this.root.clientHeight;
      const narrow = W < 820;

      const rx = W * (narrow ? 0.39 : 0.29);
      const ry = H * (narrow ? 0.17 : 0.26);
      const cx = W / 2;
      const cy = H * (narrow ? 0.46 : 0.55);

      this.root.style.setProperty('--rx', `${rx}px`);
      this.root.style.setProperty('--ry', `${ry}px`);
      this.root.style.setProperty('--cx', `${cx}px`);
      this.root.style.setProperty('--cy', `${cy}px`);

      return { W, H, rx, ry, cx, cy, narrow };
    }

    placeFigures(forceFrontSync = false) {
      const { rx, ry, cx, cy } = this.computeGeometry();
      let bestIndex = 0;
      let bestCos = -2;

      for (let i = 0; i < this.N; i += 1) {
        const a = this.ringState.rot + i * this.STEP;
        const c = Math.cos(a);
        const near = (c + 1) / 2;

        const tx = cx + Math.sin(a) * rx;
        const ty = cy + c * ry;
        const sc = 0.76 + near * 0.24;
        const bl = (1 - near) * 1.2;
        const z = c > 0 ? 60 + Math.round(c * 30) : 10 + Math.round((c + 1) * 20);

        this.metrics[i] = { tx, ty, sc, bl, z };

        if (c > bestCos) {
          bestCos = c;
          bestIndex = i;
        }

        // Do not overwrite the actively opened figure while zoomed
        if (this.mode !== 'ring' && i === this.openAt) continue;

        const fig = this.figEls[i];
        gsap.set(fig, {
          x: tx,
          y: ty,
          xPercent: -50,
          yPercent: -100,
          scale: sc,
          filter: `blur(${bl.toFixed(2)}px)`,
          zIndex: z
        });
      }

      if (bestIndex !== this.front || forceFrontSync) {
        this.setFront(bestIndex, forceFrontSync);
      }
    }

    setFront(index, instant = false) {
      const prev = this.front;
      this.front = index;
      const look = this.looks[index];

      this.figEls.forEach((fig, k) => {
        fig.classList.toggle('is-front', k === index);
        const img = fig.querySelector('img');
        if (img) img.alt = k === index ? look.alt : '';
      });

      // Update corner HUD
      this.nearIndexEl.textContent = pad2(index + 1);
      this.nearNameEl.textContent = look.name;

      if (!instant && prev !== -1) {
        gsap.fromTo(
          this.nearNameEl,
          { yPercent: 105 },
          { yPercent: 0, duration: this.dur(0.75), ease: 'power3.out', overwrite: 'auto' }
        );
      }

      // Smoothly crossfade background tone via GSAP
      if (this.mode === 'ring') {
        gsap.to(this.root, {
          '--tone': look.tone,
          duration: instant ? 0 : this.dur(1.0),
          ease: 'power2.inOut',
          overwrite: 'auto'
        });
      }
    }

    /* ----------------------------------------------------------------------
       GSAP Entrance, Rotation, Open & Close Choreographies
       ---------------------------------------------------------------------- */

    playEntrance() {
      const titleLines = this.root.querySelectorAll('.rg-title i');
      const eyebrow = this.root.querySelector('.rg-eyebrow');

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        eyebrow,
        { opacity: 0, y: 12 },
        { opacity: 0.72, y: 0, duration: this.dur(0.7) }
      )
        .fromTo(
          titleLines,
          { yPercent: 112 },
          { yPercent: 0, duration: this.dur(1.05), stagger: 0.12 },
          '<0.08'
        )
        .fromTo(
          this.figEls,
          { opacity: 0 },
          { opacity: 1, duration: this.dur(0.85), stagger: 0.06, ease: 'power2.out' },
          '<0.05'
        )
        .fromTo(
          [this.nearEl, this.turnEl],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: this.dur(0.75), stagger: 0.08 },
          '-=0.55'
        );
    }

    bring(index, { announce = false, duration = 0.9 } = {}) {
      if (this.mode !== 'ring' && this.mode !== 'opening') return Promise.resolve();

      const TWO_PI = Math.PI * 2;
      let delta = (-index * this.STEP - this.ringState.rot) % TWO_PI;
      if (delta > Math.PI) delta -= TWO_PI;
      if (delta < -Math.PI) delta += TWO_PI;

      if (this.rotTween) this.rotTween.kill();

      if (announce) {
        this.announcerEl.textContent = `Look ${index + 1} of ${this.N}: ${this.looks[index].name}`;
      }

      if (Math.abs(delta) < 0.002) {
        this.ringState.rot += delta;
        this.placeFigures();
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        this.rotTween = gsap.to(this.ringState, {
          rot: this.ringState.rot + delta,
          duration: this.dur(duration),
          ease: 'power3.out',
          onUpdate: () => this.placeFigures(),
          onComplete: () => {
            this.rotTween = null;
            resolve();
          }
        });
      });
    }

    getOpenCoords() {
      const W = this.root.clientWidth;
      const H = this.root.clientHeight;
      const narrow = W < 820;
      return {
        x: W * (narrow ? 0.5 : 0.33),
        y: H * (narrow ? 0.47 : 0.93),
        scale: narrow ? 2.4 : 2.9
      };
    }

    async openLook(index, triggerEl = null) {
      if (this.mode !== 'ring') return;

      this.mode = 'opening';
      this.lastFocusedEl = triggerEl || document.activeElement;
      this.setHot(-1);

      // Rotate chosen figure to the front first if needed
      const needsTurn = index !== this.front;
      if (needsTurn) {
        await this.bring(index, { duration: 0.55 });
      }

      if (this.mode !== 'opening') return;

      this.openAt = index;
      const chosenFig = this.figEls[index];
      const otherFigs = this.figEls.filter((_, k) => k !== index);
      const look = this.looks[index];
      const openPos = this.getOpenCoords();

      this.renderPanelLook(index);
      this.root.classList.add('is-open');
      chosenFig.classList.add('is-open');

      this.panelEl.removeAttribute('inert');
      this.panelEl.setAttribute('aria-hidden', 'false');
      this.nearEl.setAttribute('aria-hidden', 'true');
      this.turnEl.setAttribute('aria-hidden', 'true');

      const spots = chosenFig.querySelectorAll('[data-spot]');
      const panelItems = [
        this.panelEl.querySelector('.rg-count'),
        this.panelLineEl,
        this.piecesListEl,
        this.addLookBtn
      ].filter((el) => el && !el.hidden);

      if (this.openTl) this.openTl.kill();

      this.openTl = gsap.timeline({
        onComplete: () => {
          this.mode = 'open';
          this.panelHeadingEl.focus({ preventScroll: true });
        }
      });

      this.openTl
        // Sync tone in case clicked directly
        .to(
          this.root,
          { '--tone': look.tone, duration: this.dur(0.9), ease: 'power2.inOut' },
          0
        )
        // Fade floor rings, headline, corner HUD, and other figures
        .to(
          this.floorRings,
          { opacity: 0, scale: 1.25, duration: this.dur(0.75), ease: 'power2.inOut' },
          0
        )
        .to(
          this.headEl,
          { opacity: 0, y: -28, duration: this.dur(0.6), ease: 'power2.inOut' },
          0
        )
        .to(
          [this.nearEl, this.turnEl],
          { autoAlpha: 0, duration: this.dur(0.4), ease: 'power2.out' },
          0
        )
        .to(
          otherFigs,
          { opacity: 0, duration: this.dur(0.45), ease: 'power2.out' },
          0
        )
        // Zoom & walk up chosen figure
        .to(
          chosenFig,
          {
            x: openPos.x,
            y: openPos.y,
            xPercent: -50,
            yPercent: -100,
            scale: openPos.scale,
            filter: 'blur(0px)',
            zIndex: 96,
            duration: this.dur(1.0),
            ease: 'power3.inOut'
          },
          0
        )
        // Reveal shop-the-look panel
        .to(
          this.panelEl,
          { autoAlpha: 1, duration: this.dur(0.45), ease: 'power2.out' },
          this.dur(0.38)
        )
        .fromTo(
          this.panelNameEl,
          { yPercent: 105 },
          { yPercent: 0, duration: this.dur(0.8), ease: 'power3.out' },
          this.dur(0.42)
        )
        .fromTo(
          panelItems,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: this.dur(0.7), stagger: 0.07, ease: 'power3.out' },
          this.dur(0.45)
        )
        .fromTo(
          this.closeBtn,
          { opacity: 0, y: -8 },
          { opacity: 1, y: 0, duration: this.dur(0.45), ease: 'power2.out' },
          this.dur(0.5)
        )
        // Pop hotspots onto the zoomed model
        .fromTo(
          spots,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: this.dur(0.55),
            stagger: 0.09,
            ease: 'back.out(1.7)'
          },
          this.dur(0.75)
        );
    }

    closeLook() {
      if (this.mode !== 'open' && this.mode !== 'opening') return;

      if (this.openTl) this.openTl.kill();
      this.mode = 'closing';
      this.setHot(-1);

      const index = this.openAt >= 0 ? this.openAt : this.front;
      const chosenFig = this.figEls[index];
      const otherFigs = this.figEls.filter((_, k) => k !== index);
      const targetMetric = this.metrics[index];

      this.panelEl.setAttribute('inert', '');
      this.panelEl.setAttribute('aria-hidden', 'true');
      this.nearEl.removeAttribute('aria-hidden');
      this.turnEl.removeAttribute('aria-hidden');

      if (this.closeTl) this.closeTl.kill();

      this.closeTl = gsap.timeline({
        onComplete: () => {
          chosenFig.classList.remove('is-open');
          this.root.classList.remove('is-open');
          this.openAt = -1;
          this.mode = 'ring';
          this.placeFigures();

          if (this.lastFocusedEl && typeof this.lastFocusedEl.focus === 'function') {
            this.lastFocusedEl.focus({ preventScroll: true });
          } else {
            this.stage.focus({ preventScroll: true });
          }
        }
      });

      this.closeTl
        // Hide panel quickly
        .to(
          this.panelEl,
          { autoAlpha: 0, duration: this.dur(0.32), ease: 'power2.in' },
          0
        )
        // Smoothly walk chosen figure BACK to its exact ring slot (fixes .was-open snap!)
        .to(
          chosenFig,
          {
            x: targetMetric.tx,
            y: targetMetric.ty,
            xPercent: -50,
            yPercent: -100,
            scale: targetMetric.sc,
            filter: `blur(${targetMetric.bl.toFixed(2)}px)`,
            zIndex: targetMetric.z,
            duration: this.dur(0.9),
            ease: 'power3.inOut'
          },
          0.06
        )
        // Restore floor rings, headline, other figures, and corner HUD
        .to(
          this.floorRings,
          { opacity: 1, scale: 1, duration: this.dur(0.75), ease: 'power2.out' },
          0.2
        )
        .to(
          this.headEl,
          { opacity: 1, y: 0, duration: this.dur(0.65), ease: 'power2.out' },
          0.22
        )
        .to(
          otherFigs,
          { opacity: 1, duration: this.dur(0.55), ease: 'power2.out' },
          0.25
        )
        .to(
          [this.nearEl, this.turnEl],
          { autoAlpha: 1, duration: this.dur(0.45), ease: 'power2.out' },
          0.35
        );
    }

    /* ----------------------------------------------------------------------
       Bidirectional Hotspot <-> Row Highlight
       ---------------------------------------------------------------------- */

    setHot(k) {
      if (this.hot === k) return;
      this.hot = k;
      if (this.openAt < 0) return;

      const spots = this.figEls[this.openAt].querySelectorAll('[data-spot]');
      const rows = this.piecesListEl.querySelectorAll('[data-piece]');

      spots.forEach((btn) => {
        btn.classList.toggle('is-hot', Number(btn.dataset.k) === k);
      });
      rows.forEach((li) => {
        li.classList.toggle('is-hot', Number(li.dataset.k) === k);
      });
    }

    /* ----------------------------------------------------------------------
       Simulated Cart & Toast Feedback
       ---------------------------------------------------------------------- */

    async addToBag(variantIds, message, buttonEl) {
      const validIds = variantIds.filter(Boolean);
      if (!validIds.length) {
        this.showToast('Selected size is currently sold out.', 0, true);
        return;
      }

      if (buttonEl) buttonEl.classList.add('is-loading');

      try {
        // Simulate realistic async Shopify /cart/add.js roundtrip
        await new Promise((resolve) => setTimeout(resolve, 220));
        this.cartCount += validIds.length;
        this.showToast(message, this.cartCount, false);
      } catch (err) {
        console.error('[SoleneLookRing] Cart add failed:', err);
        this.showToast('Could not update bag. Please try again.', 0, true);
      } finally {
        if (buttonEl) buttonEl.classList.remove('is-loading');
      }
    }

    showToast(text, count, isError = false) {
      if (!this.toastEl || !text) return;

      this.toastEl.innerHTML = '';
      const p = document.createElement('p');
      if (isError) p.classList.add('is-error');

      const span = document.createElement('span');
      span.textContent = text;
      p.appendChild(span);

      if (count > 0 && !isError) {
        const link = document.createElement('a');
        link.href = this.root.dataset.cartUrl || '#bag';
        link.textContent = `${this.root.dataset.viewBag || 'View bag'} (${count})`;
        link.addEventListener('click', (e) => e.preventDefault());
        p.appendChild(link);
      }

      this.toastEl.appendChild(p);

      gsap.fromTo(
        p,
        { opacity: 0, y: -18, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: this.dur(0.5), ease: 'back.out(1.6)' }
      );

      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        gsap.to(p, {
          opacity: 0,
          y: -12,
          duration: this.dur(0.3),
          ease: 'power2.in',
          onComplete: () => {
            if (this.toastEl.contains(p)) this.toastEl.innerHTML = '';
          }
        });
      }, 4200);
    }

    /* ----------------------------------------------------------------------
       Event Wiring & Observers
       ---------------------------------------------------------------------- */

    bindEvents() {
      // Corner CTA & Prev/Next
      this.viewBtn.addEventListener('click', () => this.openLook(this.front, this.viewBtn));
      this.prevBtn.addEventListener('click', () =>
        this.bring((this.front - 1 + this.N) % this.N, { announce: true })
      );
      this.nextBtn.addEventListener('click', () =>
        this.bring((this.front + 1) % this.N, { announce: true })
      );
      this.closeBtn.addEventListener('click', () => this.closeLook());

      // Add entire look
      this.addLookBtn.addEventListener('click', () => {
        if (this.openAt < 0) return;
        const rows = Array.from(this.piecesListEl.querySelectorAll('[data-piece]'));
        const ids = rows.map((row) => this.getSelectedVariant(row)).filter(Boolean);
        this.addToBag(ids, `${this.looks[this.openAt].name} added to your bag`, this.addLookBtn);
      });

      // Prevent demo product links from jumping
      this.root.addEventListener('click', (e) => {
        if (e.target.closest('a[href="#demo"]')) e.preventDefault();
      });

      // Drag to turn (pointer events)
      this.stage.addEventListener('pointerdown', (e) => {
        if (this.mode !== 'ring') return;
        if (e.pointerType === 'mouse' && e.button !== 0) return;

        if (this.rotTween) {
          this.rotTween.kill();
          this.rotTween = null;
        }

        this.drag.down = true;
        this.drag.moved = 0;
        this.drag.lastX = e.clientX;
        this.drag.velocity = 0;
      });

      window.addEventListener('pointermove', (e) => {
        if (!this.drag.down || this.mode !== 'ring') return;
        const dx = e.clientX - this.drag.lastX;
        this.drag.lastX = e.clientX;
        this.drag.moved += Math.abs(dx);

        const dRot = (dx / Math.max(this.root.clientWidth, 320)) * 3.2;
        this.drag.velocity = dRot;
        this.ringState.rot += dRot;

        if (this.drag.moved > 6) {
          this.root.setAttribute('data-drag', '');
        }

        this.placeFigures();
      });

      const endDrag = () => {
        if (!this.drag.down) return;
        this.drag.down = false;
        this.root.removeAttribute('data-drag');

        // Gentle GSAP inertia glide if user flicked
        if (Math.abs(this.drag.velocity) > 0.015 && !prefersReducedMotion()) {
          const throwTarget = this.ringState.rot + this.drag.velocity * 6;
          this.rotTween = gsap.to(this.ringState, {
            rot: throwTarget,
            duration: 0.55,
            ease: 'power2.out',
            onUpdate: () => this.placeFigures(),
            onComplete: () => {
              this.rotTween = null;
            }
          });
        }
      };

      window.addEventListener('pointerup', endDrag);
      window.addEventListener('pointercancel', endDrag);
      window.addEventListener('blur', endDrag);

      // Keyboard navigation
      this.stage.addEventListener('keydown', (e) => {
        if (this.mode !== 'ring') return;
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.bring((this.front + 1) % this.N, { announce: true });
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.bring((this.front - 1 + this.N) % this.N, { announce: true });
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openLook(this.front, this.stage);
        }
      });

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && (this.mode === 'open' || this.mode === 'opening')) {
          this.closeLook();
        }
      });
    }

    initObservers() {
      // Responsive resize recalculation
      const ro = new ResizeObserver(() => {
        this.placeFigures();
        if (this.mode === 'open' && this.openAt >= 0) {
          const openPos = this.getOpenCoords();
          gsap.set(this.figEls[this.openAt], {
            x: openPos.x,
            y: openPos.y,
            xPercent: -50,
            yPercent: -100,
            scale: openPos.scale
          });
        }
      });
      ro.observe(this.root);

      // Entrance reveal when section enters viewport
      let entered = false;
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !entered) {
            entered = true;
            this.playEntrance();
            io.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      io.observe(this.root);
    }
  }

  /* ==========================================================================
     Bootstrap
     ========================================================================== */

  document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('solene-look-ring');
    if (root && window.gsap) {
      new SoleneLookRing(root, LOOKS);
    }
  });
})();
