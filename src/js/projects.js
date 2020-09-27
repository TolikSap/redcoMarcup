document.addEventListener("DOMContentLoaded", function (event) {
        // const mapGeorgia = document.getElementById('map__img');
        // mapCheckpoint variables
        const mapCheckpointBatumi = document.getElementById('mapPoint__Batumi');
        const mapCheckpointKutaisi = document.getElementById('mapPoint__Kutaisi');
        const mapCheckpointBorjomi = document.getElementById('mapPoint__Borjomi');
        const mapCheckpointTbilisi = document.getElementById('mapPoint__Tbilisi');

        // variables for Map description
        // const listMapDescr = document.getElementById('map__descr');
        const mapDescrBatumi = document.getElementById('mapDescr__Batumi');
        const mapDescrKutaisi = document.getElementById('mapDescr__Kutaisi');
        const mapDescrBorjomi = document.getElementById('mapDescr__Borjomi');
        const mapDescrTbilisi = document.getElementById('mapDescr__Tbilisi');

        const showBatumiDescr = () => {
            if ($('.map__descr_item').hasClass('active')){
                $('.map__descr_item').removeClass('active');
                mapDescrBatumi.classList.toggle('active');
            }
        }

        const showKutaisiDescr = () => {
            if ($('.map__descr_item').hasClass('active')){
                $('.map__descr_item').removeClass('active');
                mapDescrKutaisi.classList.toggle('active');
            }
        }

        const showBorjomiDescr = () => {
            if ($('.map__descr_item').hasClass('active')){
                $('.map__descr_item').removeClass('active');
                mapDescrBorjomi.classList.toggle('active');
            }
        }

        const showTbilisiDescr = () => {
            if ($('.map__descr_item').hasClass('active')){
                $('.map__descr_item').removeClass('active');
                mapDescrTbilisi.classList.toggle('active');
            }
        }

        mapCheckpointBatumi.addEventListener('mouseover', showBatumiDescr, false);
        mapCheckpointBatumi.addEventListener('click', showBatumiDescr, false);
        mapCheckpointBatumi.addEventListener('touchstart', showBatumiDescr, false);

        mapCheckpointKutaisi.addEventListener('mouseover', showKutaisiDescr, false);
        mapCheckpointKutaisi.addEventListener('click', showKutaisiDescr, false);
        mapCheckpointKutaisi.addEventListener('touchstart', showKutaisiDescr, false);

        mapCheckpointBorjomi.addEventListener('mouseover', showBorjomiDescr, false);
        mapCheckpointBorjomi.addEventListener('click', showBorjomiDescr, false);
        mapCheckpointBorjomi.addEventListener('touchstart', showBorjomiDescr, false);

        mapCheckpointTbilisi.addEventListener('mouseover', showTbilisiDescr, false);
        mapCheckpointTbilisi.addEventListener('click', showTbilisiDescr, false);
        mapCheckpointTbilisi.addEventListener('touchstart', showTbilisiDescr, false);

});

