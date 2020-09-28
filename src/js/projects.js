(() => {
    const addActiveMap = () => {
        const mapRegions = Array.from(document.querySelectorAll('#map__img path'));
        // add event listeners
        mapRegions.forEach(function (el) {
            el.addEventListener("touchstart", start, { passive: true });
            el.addEventListener("mousedown", start, { passive: true });
            el.addEventListener("touchmove", start, { passive: true });
            el.addEventListener("mousemove", start, { passive: true });
        });

        function start(e) {
            for (let i = 0; i < mapRegions.length; i++) {
                mapRegions[i].classList.remove('active');
            }
            this.classList.add('active');
        };
    };
    
    const showRegionDescr = () => {
        // mapCheckpoint variables
        const mapCheckpointBatumi = document.getElementById('mapPoint__Batumi');
        const mapCheckpointKutaisi = document.getElementById('mapPoint__Kutaisi');
        const mapCheckpointBorjomi = document.getElementById('mapPoint__Borjomi');
        const mapCheckpointTbilisi = document.getElementById('mapPoint__Tbilisi');

        // variables for Map description
        const mapDescrBatumi = document.getElementById('mapDescr__Batumi');
        const mapDescrKutaisi = document.getElementById('mapDescr__Kutaisi');
        const mapDescrBorjomi = document.getElementById('mapDescr__Borjomi');
        const mapDescrTbilisi = document.getElementById('mapDescr__Tbilisi');

        const showBatumiDescr = () => {
            if ($('.map__descr_item').hasClass('active')) {
                $('.map__descr_item').removeClass('active');
                mapDescrBatumi.classList.toggle('active');
            }
        }

        const showKutaisiDescr = () => {
            if ($('.map__descr_item').hasClass('active')) {
                $('.map__descr_item').removeClass('active');
                mapDescrKutaisi.classList.toggle('active');
            }
        }

        const showBorjomiDescr = () => {
            if ($('.map__descr_item').hasClass('active')) {
                $('.map__descr_item').removeClass('active');
                mapDescrBorjomi.classList.toggle('active');
            }
        }

        const showTbilisiDescr = () => {
            if ($('.map__descr_item').hasClass('active')) {
                $('.map__descr_item').removeClass('active');
                mapDescrTbilisi.classList.toggle('active');
            }
        }

        mapCheckpointBatumi.addEventListener('mouseover', showBatumiDescr, false, { passive: true });
        mapCheckpointBatumi.addEventListener('click', showBatumiDescr, false, { passive: true });
        mapCheckpointBatumi.addEventListener('touchstart', showBatumiDescr, { passive: true });

        mapCheckpointKutaisi.addEventListener('mouseover', showKutaisiDescr, false, { passive: true });
        mapCheckpointKutaisi.addEventListener('click', showKutaisiDescr, false, { passive: true });
        mapCheckpointKutaisi.addEventListener('touchstart', showKutaisiDescr, { passive: true });

        mapCheckpointBorjomi.addEventListener('mouseover', showBorjomiDescr, false, { passive: true });
        mapCheckpointBorjomi.addEventListener('click', showBorjomiDescr, false, { passive: true });
        mapCheckpointBorjomi.addEventListener('touchstart', showBorjomiDescr, { passive: true });

        mapCheckpointTbilisi.addEventListener('mouseover', showTbilisiDescr, false, { passive: true });
        mapCheckpointTbilisi.addEventListener('click', showTbilisiDescr, false, { passive: true });
        mapCheckpointTbilisi.addEventListener('touchstart', showTbilisiDescr, { passive: true });
    };
    
    addActiveMap();
    showRegionDescr();
})();