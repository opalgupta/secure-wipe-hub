import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Activity, 
  Database, 
  CheckCircle, 
  AlertTriangle,
  LogOut,
  Settings,
  FileText
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">SecureWipe ISO</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Security Dashboard</h1>
          <p className="text-muted-foreground">Monitor your data wiping operations and security status</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="cyber-glow border-green-500/20 bg-gradient-to-br from-card to-green-950/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed Wipes</p>
                  <p className="text-3xl font-bold text-green-400">1,247</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="cyber-glow border-blue-500/20 bg-gradient-to-br from-card to-blue-950/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Sessions</p>
                  <p className="text-3xl font-bold text-blue-400">23</p>
                </div>
                <Activity className="h-8 w-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="cyber-glow border-primary/20 bg-gradient-to-br from-card to-primary/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Data Processed</p>
                  <p className="text-3xl font-bold text-primary">2.4 TB</p>
                </div>
                <Database className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="cyber-glow border-yellow-500/20 bg-gradient-to-br from-card to-yellow-950/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Alerts</p>
                  <p className="text-3xl font-bold text-yellow-400">3</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Operations */}
          <div className="lg:col-span-2">
            <Card className="cyber-glow bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Recent Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: "WP-001", device: "Samsung SSD 1TB", status: "Completed", time: "2 hours ago" },
                    { id: "WP-002", device: "Western Digital HDD 2TB", status: "In Progress", time: "Active" },
                    { id: "WP-003", device: "iPhone 12 Pro", status: "Completed", time: "5 hours ago" },
                    { id: "WP-004", device: "Dell Laptop SSD", status: "Scheduled", time: "Tomorrow 9:00 AM" },
                  ].map((operation) => (
                    <div key={operation.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-card/30">
                      <div>
                        <p className="font-medium">{operation.device}</p>
                        <p className="text-sm text-muted-foreground">ID: {operation.id}</p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={operation.status === "Completed" ? "default" : 
                                  operation.status === "In Progress" ? "secondary" : 
                                  "outline"}
                          className={operation.status === "Completed" ? "bg-green-500/20 text-green-400 border-green-500/30" :
                                     operation.status === "In Progress" ? "bg-blue-500/20 text-blue-400 border-blue-500/30" :
                                     "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"}
                        >
                          {operation.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{operation.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="cyber-glow bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Database className="h-4 w-4 mr-2" />
                  Start New Wipe
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Configure Settings
                </Button>
              </CardContent>
            </Card>

            <Card className="cyber-glow bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-400" />
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">System Health</span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Optimal</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Last Backup</span>
                  <span className="text-sm text-muted-foreground">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">ISO Compliance</span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;