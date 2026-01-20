function process() {
   const JUMLAH_SISWA = 10
  
   let total = 0
   let lulus = 0
   let tidakLulus = 0
   let output = ""
  
  // LOOP INPUT
  for (let i = 1; i <= JUMLAH_SISWA; i++) {
    let nilai = Number(prompt('Masukkan nilai siswa ke-' + i));
  
    total += nilai
    
    if (nilai >= 75) {
      output += "Siswa ke-"+ i + ": " + nilai + " (LULUS)<br>";
      lulus++
    } else {
      output += "Siswa ke-" + i + ": " + nilai + "(TIDAK LULUS)<br>";
      tidakLulus++
    }
  }
  
  let rata = total / JUMLAH_SISWA
  
  output += `
  <div class="ringkasan">
   Total nilai: ${total}<br>
   Rata-rata: ${rata.toFixed(2)}<br>
   Jumlah lulus: ${lulus}<br>
   jumlah tidak lulu: ${tidakLulus  }
    </div> 
  `;
  
  document.getElementById("hasil").innerHTML = output;
}