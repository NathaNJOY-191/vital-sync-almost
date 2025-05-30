import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Alerts() {
    const navigate = useNavigate();
    const [popupOpen, setPopupOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        navigate('/');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar (copied from Home.js, all navigation is SPA) */}
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
                    gap: 40 // Large space between buttons
                }}>
                    <li>
                        <button
                            type="button"
                            onClick={() => navigate('/home')}
                            style={{
                                background: window.location.pathname === '/home' ? '#FFF5F5' : 'none',
                                color: window.location.pathname === '/home' ? '#FF6B6B' : '#555',
                                border: 'none',
                                padding: 0,
                                margin: 0,
                                width: '100%',
                                textAlign: 'left',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: 16,
                                fontWeight: 500,
                                cursor: 'pointer',
                                borderRadius: 10
                            }}
                            className={window.location.pathname === '/home' ? 'sidebar-link active' : 'sidebar-link'}
                        >
                            <i className="fas fa-chart-line" style={{ marginRight: 12, fontSize: 18 }}></i> <span>Dashboard</span>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => navigate('/live')}
                            style={{
                                background: window.location.pathname === '/live' ? '#FFF5F5' : 'none',
                                color: window.location.pathname === '/live' ? '#FF6B6B' : '#555',
                                border: 'none',
                                padding: 0,
                                margin: 0,
                                width: '100%',
                                textAlign: 'left',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: 16,
                                fontWeight: 500,
                                cursor: 'pointer',
                                borderRadius: 10
                            }}
                            className={window.location.pathname === '/live' ? 'sidebar-link active' : 'sidebar-link'}
                        >
                            <i className="fas fa-heartbeat" style={{ marginRight: 12, fontSize: 18 }}></i> <span>Live Data</span>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => navigate('/alerts')}
                            style={{
                                background: window.location.pathname === '/alerts' ? '#FFF5F5' : 'none',
                                color: window.location.pathname === '/alerts' ? '#FF6B6B' : '#555',
                                border: 'none',
                                padding: 0,
                                margin: 0,
                                width: '100%',
                                textAlign: 'left',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: 16,
                                fontWeight: 500,
                                cursor: 'pointer',
                                borderRadius: 10
                            }}
                            className={window.location.pathname === '/alerts' ? 'sidebar-link active' : 'sidebar-link'}
                        >
                            <i className="fas fa-bell" style={{ marginRight: 12, fontSize: 18 }}></i> <span>Alerts</span>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => navigate('/history')}
                            style={{
                                background: window.location.pathname === '/history' ? '#FFF5F5' : 'none',
                                color: window.location.pathname === '/history' ? '#FF6B6B' : '#555',
                                border: 'none',
                                padding: 0,
                                margin: 0,
                                width: '100%',
                                textAlign: 'left',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: 16,
                                fontWeight: 500,
                                cursor: 'pointer',
                                borderRadius: 10
                            }}
                            className={window.location.pathname === '/history' ? 'sidebar-link active' : 'sidebar-link'}
                        >
                            <i className="fas fa-history" style={{ marginRight: 12, fontSize: 18 }}></i> <span>History</span>
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
            <div className="main-content" style={{ marginLeft: 260, padding: '60px 30px 30px 30px', width: 'calc(100% - 260px)', minHeight: '100vh', boxSizing: 'border-box', overflowY: 'auto', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
                <div className="container" style={{ width: '100%', background: 'white', borderRadius: 16, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)', overflow: 'hidden', maxWidth: 900, margin: '20px auto', padding: 0 }}>
                    <div className="header" style={{ background: 'linear-gradient(45deg, #FF6B6B, #FF8E8E)', padding: 25, color: 'white', textAlign: 'center', position: 'relative' }}>
                        <h2 style={{ fontSize: 24, fontWeight: 600, margin: 0, letterSpacing: 0.5 }}>Notifications</h2>
                        <p style={{ fontSize: 14, opacity: 0.9, marginTop: 5 }}>Stay updated with your health alerts</p>
                    </div>
                    <div className="nav-links" style={{ display: 'flex', justifyContent: 'center', paddingBottom: 15 }}>
                        <button type="button" className="active" style={{ color: '#fff', background: '#FF6B6B', textDecoration: 'none', padding: '5px 15px', margin: '0 5px', fontSize: 14, fontWeight: 500, borderRadius: 20, border: 'none', cursor: 'pointer' }}>All</button>
                        <button type="button" style={{ color: '#666', background: 'none', textDecoration: 'none', padding: '5px 15px', margin: '0 5px', fontSize: 14, fontWeight: 500, borderRadius: 20, border: 'none', cursor: 'pointer' }}>Alerts</button>
                        <button type="button" style={{ color: '#666', background: 'none', textDecoration: 'none', padding: '5px 15px', margin: '0 5px', fontSize: 14, fontWeight: 500, borderRadius: 20, border: 'none', cursor: 'pointer' }}>Updates</button>
                    </div>
                    <div className="notifications-container" style={{ padding: 20, maxHeight: 400, overflowY: 'auto' }}>
                        <div className="notification unread" style={{ background: 'white', marginBottom: 15, borderRadius: 12, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', overflow: 'hidden', transition: 'all 0.3s ease', position: 'relative' }}>
                            <div className="notification-icon" style={{ position: 'absolute', left: 15, top: 18, width: 32, height: 32, borderRadius: '50%', background: '#fff5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-file-medical" style={{ color: '#FF6B6B', fontSize: 15 }}></i>
                            </div>
                            <div className="notification-content" style={{ padding: 18, paddingLeft: 60 }}>
                                <h3 style={{ fontSize: 15, marginBottom: 5, color: '#333', fontWeight: 600 }}>Health Report Ready</h3>
                                <p style={{ color: '#666', fontSize: 14, margin: 0 }}>Your weekly health report is ready to view.</p>
                                <div className="time" style={{ display: 'flex', alignItems: 'center', color: '#999', fontSize: 12, marginTop: 8 }}>
                                    <i className="far fa-clock" style={{ fontSize: 12, marginRight: 5 }}></i> 5 minutes ago
                                </div>
                            </div>
                        </div>
                        <div className="notification" style={{ background: 'white', marginBottom: 15, borderRadius: 12, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', overflow: 'hidden', transition: 'all 0.3s ease', position: 'relative' }}>
                            <div className="notification-icon" style={{ position: 'absolute', left: 15, top: 18, width: 32, height: 32, borderRadius: '50%', background: '#fff5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-sync-alt" style={{ color: '#FF6B6B', fontSize: 15 }}></i>
                            </div>
                            <div className="notification-content" style={{ padding: 18, paddingLeft: 60 }}>
                                <h3 style={{ fontSize: 15, marginBottom: 5, color: '#333', fontWeight: 600 }}>System Update</h3>
                                <p style={{ color: '#666', fontSize: 14, margin: 0 }}>Vital Sync has been updated to version 2.0 with new features.</p>
                                <div className="time" style={{ display: 'flex', alignItems: 'center', color: '#999', fontSize: 12, marginTop: 8 }}>
                                    <i className="far fa-clock" style={{ fontSize: 12, marginRight: 5 }}></i> 1 hour ago
                                </div>
                            </div>
                        </div>
                        <div className="notification" style={{ background: 'white', marginBottom: 15, borderRadius: 12, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', overflow: 'hidden', transition: 'all 0.3s ease', position: 'relative' }}>
                            <div className="notification-icon" style={{ position: 'absolute', left: 15, top: 18, width: 32, height: 32, borderRadius: '50%', background: '#fff5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-heartbeat" style={{ color: '#FF6B6B', fontSize: 15 }}></i>
                            </div>
                            <div className="notification-content" style={{ padding: 18, paddingLeft: 60 }}>
                                <h3 style={{ fontSize: 15, marginBottom: 5, color: '#333', fontWeight: 600 }}>Heart Rate Reminder</h3>
                                <p style={{ color: '#666', fontSize: 14, margin: 0 }}>It's time to check your heart rate! Your last measurement was 14 hours ago.</p>
                                <div className="time" style={{ display: 'flex', alignItems: 'center', color: '#999', fontSize: 12, marginTop: 8 }}>
                                    <i className="far fa-clock" style={{ fontSize: 12, marginRight: 5 }}></i> Yesterday
                                </div>
                            </div>
                        </div>
                        <div className="notification" style={{ background: 'white', marginBottom: 15, borderRadius: 12, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', overflow: 'hidden', transition: 'all 0.3s ease', position: 'relative' }}>
                            <div className="notification-icon" style={{ position: 'absolute', left: 15, top: 18, width: 32, height: 32, borderRadius: '50%', background: '#fff5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-pills" style={{ color: '#FF6B6B', fontSize: 15 }}></i>
                            </div>
                            <div className="notification-content" style={{ padding: 18, paddingLeft: 60 }}>
                                <h3 style={{ fontSize: 15, marginBottom: 5, color: '#333', fontWeight: 600 }}>Medication Reminder</h3>
                                <p style={{ color: '#666', fontSize: 14, margin: 0 }}>Don't forget to take your evening medication.</p>
                                <div className="time" style={{ display: 'flex', alignItems: 'center', color: '#999', fontSize: 12, marginTop: 8 }}>
                                    <i className="far fa-clock" style={{ fontSize: 12, marginRight: 5 }}></i> Yesterday
                                </div>
                            </div>
                        </div>
                        <div className="notification" style={{ background: 'white', marginBottom: 15, borderRadius: 12, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', overflow: 'hidden', transition: 'all 0.3s ease', position: 'relative' }}>
                            <div className="notification-icon" style={{ position: 'absolute', left: 15, top: 18, width: 32, height: 32, borderRadius: '50%', background: '#fff5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-user-md" style={{ color: '#FF6B6B', fontSize: 15 }}></i>
                            </div>
                            <div className="notification-content" style={{ padding: 18, paddingLeft: 60 }}>
                                <h3 style={{ fontSize: 15, marginBottom: 5, color: '#333', fontWeight: 600 }}>Doctor's Appointment</h3>
                                <p style={{ color: '#666', fontSize: 14, margin: 0 }}>You have an upcoming appointment with Dr. Smith on March 15.</p>
                                <div className="time" style={{ display: 'flex', alignItems: 'center', color: '#999', fontSize: 12, marginTop: 8 }}>
                                    <i className="far fa-clock" style={{ fontSize: 12, marginRight: 5 }}></i> 2 days ago
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer" style={{ padding: '15px 20px', textAlign: 'center', borderTop: '1px solid #f5f5f5' }}>
                        <button className="clear-btn" style={{ color: '#FF6B6B', background: 'transparent', border: 'none', fontSize: 14, fontWeight: 500, cursor: 'pointer', padding: '5px 15px', borderRadius: 5 }}>Clear All Notifications</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alerts;
