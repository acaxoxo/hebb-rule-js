// Inisialisasi input dan bobot awal
let inputs = [
    [1, 0],   // Contoh input pertama
    [0, 1],   // Contoh input kedua
    [1, 1],   // Contoh input ketiga
    [0, 0]    // Contoh input keempat
];

// Output target
let targets = [1, 1, 1, 0];  // Output yang diinginkan (misalnya output biner)

// Inisialisasi bobot awal (biasanya dimulai dari nol)
let weights = [0, 0];

// Fungsi untuk memperbarui bobot menggunakan Hebb's Rule
function hebbTraining(inputs, targets, learningRate) {
    // Iterasi melalui setiap contoh input
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        let target = targets[i];~

        // Update bobot sesuai aturan Hebb
        for (let j = 0; j < weights.length; j++) {
            weights[j] += learningRate * input[j] * target;
        }
    }
}

// Nilai learning rate (misalnya 0.1)
let learningRate = 0.1;

// Jalankan pelatihan dengan Hebb's Rule
hebbTraining(inputs, targets, learningRate);

console.log("Bobot setelah pelatihan:", weights);
