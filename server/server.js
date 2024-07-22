const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

// 환경 변수에서 서비스 키 가져오기
const serviceKey = process.env.REACT_APP_SERVICE_KEY;

app.get('/weather', async (req, res) => {
    try {
        // 현재 날짜와 시간을 가져옵니다.
        const now = new Date();
        const base_date = now.toISOString().slice(0, 10).replace(/-/g, ''); // 'YYYYMMDD' 형식으로 변환
        const base_time = '0600'; // 06시 발표 (변경 가능)

        // 좌표 설정 (서울)
        const nx = '55';
        const ny = '127';

        const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${encodeURIComponent(serviceKey)}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`;

        // 기상청 API 호출
        const response = await axios.get(url);

        // 응답 데이터를 클라이언트에 전달
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
