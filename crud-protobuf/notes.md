to stop port 80
sudo netstat -tulpn | grep :80

sudo systemctl stop apache2 nginx haproxy