import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function History() {
    const navigate = useNavigate();
    const [popupOpen, setPopupOpen] = useState(false);
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch ThingSpeak data (latest 10 entries)
        fetch('https://api.thingspeak.com/channels/2840540/feeds.json?results=10')
            .then((res) => res.json())
            .then((data) => {
                if (data && data.feeds) {
                    setRecords(data.feeds);
                } else {
                    setRecords([]);
                }
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to fetch data');
                setLoading(false);
            });
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        navigate('/');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar (from Home.js, with correct design and navigation) */}
            <div className="sidebar" style={{
                width: 260,
                height: '100vh',
                background: 'white',
                padding: '30px 20px',
                position: 'fixed',
                left: 0,
                top: 0,
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 100
            }}>
                <div className="logo" style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
                    <i className="fas fa-heartbeat" style={{ color: '#FF6B6B', fontSize: 24 }}></i>
                    <h2 style={{ color: '#FF6B6B', fontWeight: 700, fontSize: 24, letterSpacing: 1, marginLeft: 10 }}>VitalSync</h2>
                </div>
                <ul className="menu" style={{
                    listStyle: 'none',
                    padding: 0,
                    marginTop: 10,
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 15
                }}>
                    <li>
                        <button type="button" onClick={() => navigate('/home')} style={{ background: window.location.pathname === '/home' ? '#FFF5F5' : 'none', color: window.location.pathname === '/home' ? '#FF6B6B' : '#666', border: 'none', padding: '12px 15px', margin: 0, width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', fontSize: 16, fontWeight: 500, cursor: 'pointer', borderRadius: 10, boxShadow: window.location.pathname === '/home' ? '0 5px 10px rgba(255, 107, 107, 0.2)' : 'none', minHeight: 48, transition: 'all 0.3s' }} className={window.location.pathname === '/home' ? 'sidebar-link active' : 'sidebar-link'}>
                            <i className="fas fa-chart-line" style={{ marginRight: 12, fontSize: 18, width: 22, textAlign: 'center' }}></i> <span>Dashboard</span>
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={() => navigate('/live')} style={{ background: window.location.pathname === '/live' ? '#FFF5F5' : 'none', color: window.location.pathname === '/live' ? '#FF6B6B' : '#666', border: 'none', padding: '12px 15px', margin: 0, width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', fontSize: 16, fontWeight: 500, cursor: 'pointer', borderRadius: 10, boxShadow: window.location.pathname === '/live' ? '0 5px 10px rgba(255, 107, 107, 0.2)' : 'none', minHeight: 48, transition: 'all 0.3s' }} className={window.location.pathname === '/live' ? 'sidebar-link active' : 'sidebar-link'}>
                            <i className="fas fa-heartbeat" style={{ marginRight: 12, fontSize: 18, width: 22, textAlign: 'center' }}></i> <span>Live Data</span>
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={() => navigate('/alerts')} style={{ background: window.location.pathname === '/alerts' ? '#FFF5F5' : 'none', color: window.location.pathname === '/alerts' ? '#FF6B6B' : '#666', border: 'none', padding: '12px 15px', margin: 0, width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', fontSize: 16, fontWeight: 500, cursor: 'pointer', borderRadius: 10, boxShadow: window.location.pathname === '/alerts' ? '0 5px 10px rgba(255, 107, 107, 0.2)' : 'none', minHeight: 48, transition: 'all 0.3s' }} className={window.location.pathname === '/alerts' ? 'sidebar-link active' : 'sidebar-link'}>
                            <i className="fas fa-bell" style={{ marginRight: 12, fontSize: 18, width: 22, textAlign: 'center' }}></i> <span>Alerts</span>
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={() => navigate('/history')} style={{ background: window.location.pathname === '/history' ? '#FFF5F5' : 'none', color: window.location.pathname === '/history' ? '#FF6B6B' : '#666', border: 'none', padding: '12px 15px', margin: 0, width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', fontSize: 16, fontWeight: 500, cursor: 'pointer', borderRadius: 10, boxShadow: window.location.pathname === '/history' ? '0 5px 10px rgba(255, 107, 107, 0.2)' : 'none', minHeight: 48, transition: 'all 0.3s' }} className={window.location.pathname === '/history' ? 'sidebar-link active' : 'sidebar-link'}>
                            <i className="fas fa-history" style={{ marginRight: 12, fontSize: 18, width: 22, textAlign: 'center' }}></i> <span>History</span>
                        </button>
                    </li>
                </ul>
                <div className="user-profile" id="user-profile" style={{ display: 'flex', alignItems: 'center', padding: '15px 0', borderTop: '1px solid #f1f1f1', cursor: 'pointer', position: 'relative' }} onClick={() => setPopupOpen((v) => !v)}>
                    <img src="images.jpeg" alt="User" style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 10, background: '#eee' }} />
                    <div className="user-info" style={{ flexGrow: 1 }}>
                        <h4 style={{ fontSize: 14, margin: 0, color: '#333' }}>John Doe</h4>
                        <p style={{ fontSize: 12, color: '#888', margin: 0 }}>Patient</p>
                    </div>
                    {popupOpen && (
                        <div id="popup" className="popup-container" style={{ display: 'block', position: 'absolute', backgroundColor: 'white', border: '1px solid #ccc', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 10, zIndex: 1000, borderRadius: 18, width: 200, bottom: 80, left: 20 }}>
                            <div className="popup-content">
                                <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                                    <li style={{ padding: '8px 12px' }}><a href="profile.html" style={{ textDecoration: 'none', color: '#333', display: 'block' }}>Profile</a></li>
                                    <li style={{ padding: '8px 12px' }}><a href="settings.html" style={{ textDecoration: 'none', color: '#333', display: 'block' }}>Settings</a></li>
                                    <li style={{ padding: '8px 12px' }}><button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#333', width: '100%', textAlign: 'left', cursor: 'pointer', padding: 0 }}>Logout</button></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Main Content */}
            <div className="main-content" style={{ marginLeft: 260, padding: 30, width: 'calc(100% - 260px)' }}>
                <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
                    <h1 style={{ fontSize: 28, color: '#333', fontWeight: 600 }}>Health History</h1>
                </div>
                
                {/* History Data Table */}
                <section className="history-section">
                    <div className="history-data" style={{ background: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)' }}>
                        <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th style={{ padding: 15, textAlign: 'left', fontWeight: 600, color: '#555', fontSize: 14, borderBottom: '1px solid #eee' }}>Date & Time</th>
                                    <th style={{ padding: 15, textAlign: 'left', fontWeight: 600, color: '#555', fontSize: 14, borderBottom: '1px solid #eee' }}>Temperature (°C)</th>
                                    <th style={{ padding: 15, textAlign: 'left', fontWeight: 600, color: '#555', fontSize: 14, borderBottom: '1px solid #eee' }}>Humidity (%)</th>
                                    <th style={{ padding: 15, textAlign: 'left', fontWeight: 600, color: '#555', fontSize: 14, borderBottom: '1px solid #eee' }}>SpO₂ (%)</th>
                                    <th style={{ padding: 15, textAlign: 'left', fontWeight: 600, color: '#555', fontSize: 14, borderBottom: '1px solid #eee' }}>Body Temp (°C)</th>
                                    <th style={{ padding: 15, textAlign: 'left', fontWeight: 600, color: '#555', fontSize: 14, borderBottom: '1px solid #eee' }}>Heart Rate (BPM)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr><td colSpan="6" style={{ textAlign: 'center', padding: 20 }}>Loading...</td></tr>
                                ) : error ? (
                                    <tr><td colSpan="6" style={{ textAlign: 'center', padding: 20, color: 'red' }}>{error}</td></tr>
                                ) : records.length === 0 ? (
                                    <tr><td colSpan="6" style={{ textAlign: 'center', padding: 20 }}>No data available</td></tr>
                                ) : (
                                    records.map((rec) => (
                                        <tr key={rec.entry_id}>
                                            <td style={{ padding: 15, borderBottom: '1px solid #eee', color: '#333', fontSize: 14 }}>{rec.created_at ? new Date(rec.created_at).toLocaleString() : '-'}</td>
                                            <td style={{ padding: 15, borderBottom: '1px solid #eee', color: '#333', fontSize: 14 }}>{rec.field1 || '-'}</td>
                                            <td style={{ padding: 15, borderBottom: '1px solid #eee', color: '#333', fontSize: 14 }}>{rec.field2 || '-'}</td>
                                            <td style={{ padding: 15, borderBottom: '1px solid #eee', color: '#333', fontSize: 14 }}>{rec.field3 || '-'}</td>
                                            <td style={{ padding: 15, borderBottom: '1px solid #eee', color: '#333', fontSize: 14 }}>{rec.field4 || '-'}</td>
                                            <td style={{ padding: 15, borderBottom: '1px solid #eee', color: '#333', fontSize: 14 }}>{rec.field7 || '-'}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default History;